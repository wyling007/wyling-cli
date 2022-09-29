/** 返回容器 */
export type ResContainer<T> =
  | {
      status: 'success';
      success: T;
    }
  | {
      status: 'error';
      error: {
        code: number;
        msg: string;
      };
    }
  | {
      status: 'networkError';
      networkError: unknown;
    };

/** 分页返回统一包装 */
export type PageRes<T> = {
  list: T[];
  total: number;
};

/** 分页请求 */
export type PageParams<T> = {
  pageNum: number;
  pageSize: number;
} & T;
