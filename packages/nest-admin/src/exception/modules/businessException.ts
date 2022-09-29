import { HttpException } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(msg: string, code = -1) {
    super(
      {
        msg,
        code,
      },
      400,
    );
  }
}
