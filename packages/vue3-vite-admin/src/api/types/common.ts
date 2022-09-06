/** 返回容器 */
export type ResContainerModel<T> =
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
export type PageResModel<T> = {
  list: T[];
  total: number;
};

/** 分页请求 */
export type PageParamsModel<T> = {
  pageNum: number;
  pageSize: number;
} & T;
