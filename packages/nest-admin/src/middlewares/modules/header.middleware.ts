import { Request, Response, NextFunction } from 'express';

/** jwt鉴权中间件 */
export const setHeaderMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.header({ 'Response-Status-Type': 'success' });
  next();
};
