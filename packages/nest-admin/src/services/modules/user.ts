import { DatabaseRepository } from '@/database';
import { User } from '@/database/entities';
import { BusinessException } from '@/exception';
import { Like } from 'typeorm';

/** 用户服务 */
export namespace UserService {
  /** 查询用户列表 */
  export async function getUserList(params: {
    pageNum: number;
    pageSize: number;
    username?: string;
  }) {
    const [userList, total] =
      await DatabaseRepository.UsersRepository.findAndCount({
        skip: (params.pageNum - 1) * params.pageSize,
        take: params.pageSize,
        relations: ['roles'],
        where: { username: params.username && Like(`%${params.username}%`) },
      });
    return { list: userList, total };
  }

  /** 根据ID获取用户信息 */
  export async function getUserInfoByID(
    params: Pick<User, 'id'>,
    isDetail = false,
  ) {
    const user = await DatabaseRepository.UsersRepository.findOne({
      where: { id: params.id },
      relations: isDetail ? ['roles'] : [],
    });
    if (!user) {
      throw new BusinessException('用户不存在');
    } else {
      return user;
    }
  }

  /** 新增用户参数类型 */
  type AddUserParams = Pick<User, 'username' | 'password'> &
    Partial<Pick<User, 'email' | 'phone'>>;
  /** 新增用户 */
  export async function addUser(params: AddUserParams) {
    const oldUser = await DatabaseRepository.UsersRepository.findOne({
      where: { username: params.username },
    });
    if (oldUser) {
      throw new BusinessException('用户已存在');
    } else {
      const newUser = { ...new User(), ...params };
      const user = await DatabaseRepository.UsersRepository.save(newUser);
      Reflect.deleteProperty(user, 'password');
      return user;
    }
  }

  /** 修改用户参数类型 */
  type EditUserParams = Pick<User, 'id'> &
    Partial<Pick<User, 'username' | 'password' | 'email' | 'phone'>>;
  /** 修改用户 */
  export async function editUser(params: EditUserParams) {
    const user = await DatabaseRepository.UsersRepository.findOne({
      where: { id: params.id },
    });
    if (!user) {
      throw new BusinessException('用户不存在');
    }
    const res = await DatabaseRepository.UsersRepository.save({
      ...user,
      ...params,
    });
    return res;
  }

  /** 删除用户 */
  export async function deleteUser(params: Pick<User, 'id'>) {
    const user = await DatabaseRepository.UsersRepository.findOne({
      where: { id: params.id },
    });
    if (!user) {
      throw new BusinessException('用户不存在');
    }
    const res = await DatabaseRepository.UsersRepository.softRemove(user);
    return res;
  }

  /** 批量删除用户 */
  export async function deleteUsers(params: Pick<User, 'id'>[] = []) {
    const res = await DatabaseRepository.UsersRepository.softRemove(params);
    return res;
  }

  /** 恢复用户 */
  export async function restoreUser(params: Pick<User, 'id'>) {
    const user = await DatabaseRepository.UsersRepository.findOne({
      where: { id: params.id },
      withDeleted: true,
    });
    if (!user) {
      throw new BusinessException('用户不存在');
    }
    const res = await DatabaseRepository.UsersRepository.recover(user);
    return res;
  }

  /** 批量恢复用户 */
  export async function restoreUsers(params: Pick<User, 'id'>[] = []) {
    const res = await DatabaseRepository.UsersRepository.recover(params);
    return res;
  }

  /** 根据用户密码获取用户信息 */
  export async function getUserInfoByPassword(
    params: Pick<User, 'username' | 'password'>,
  ) {
    const user = await DatabaseRepository.UsersRepository.findOne({
      where: {
        username: params.username,
        password: params.password,
      },
      relations: ['roles'],
    });
    if (!user) {
      throw new BusinessException('用户名密码错误');
    } else {
      return user;
    }
  }
}
