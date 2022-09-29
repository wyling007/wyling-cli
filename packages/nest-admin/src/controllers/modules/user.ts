import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { UserService } from '@/services';
import { IsString, IsNumberString, IsOptional } from 'class-validator';

export class PageParams {
  @ApiProperty({
    description: '当前页码',
  })
  @IsNumberString()
  pageNum: number;

  @ApiProperty({
    description: '每页数量',
  })
  @IsNumberString()
  pageSize: number;
}

export class GetUserListQuery extends PageParams {
  @ApiProperty({
    description: '用户名',
    required: false,
  })
  @IsString({
    message: '$property必须是字符串',
  })
  @IsOptional()
  username?: string;
}

export class GetUserByIdParams {
  @ApiProperty({
    description: '用户ID',
  })
  @IsNumberString()
  id: number;
}

class AddUserBody {
  @ApiProperty({
    description: '用户名',
  })
  @IsString({
    message: '$property必须是字符串',
  })
  username: string;

  @ApiProperty({
    description: '密码',
  })
  @IsString({
    message: '$property必须是字符串',
  })
  password: string;

  @ApiProperty({
    description: '手机号',
    required: false,
  })
  @IsString({
    message: '$property必须是字符串',
  })
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description: '邮箱',
    required: false,
  })
  @IsString({
    message: '$property必须是字符串',
  })
  @IsOptional()
  email?: string;
}

@ApiTags('用户管理')
@Controller('system/user')
export class UserController {
  @ApiOperation({
    summary: '查询用户列表',
  })
  @Get()
  getUserList(@Query() query: GetUserListQuery) {
    return UserService.getUserList(query);
  }

  @ApiOperation({
    summary: '查询用户信息',
  })
  @Get('/:id')
  getUserById(@Param() params: GetUserByIdParams) {
    return UserService.getUserInfoByID(params);
  }

  @ApiOperation({
    summary: '新建用户',
  })
  @Post()
  addUser(@Body() body: AddUserBody) {
    return UserService.addUser(body);
  }

  @ApiOperation({
    summary: '更新用户信息',
  })
  @Put()
  updateUser() {
    // return UserService.
  }

  @ApiOperation({
    summary: '删除用户',
  })
  @Delete('/:id')
  deleteUserById(@Param() params: GetUserByIdParams) {
    return UserService.deleteUser(params);
  }
}
