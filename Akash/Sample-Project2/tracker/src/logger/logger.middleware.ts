import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class customlogger implements NestMiddleware {
  private logger = new Logger('logger for HTTP');

  use(req: Request, res: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = req;

    res.on('finish', () => {
      const statusCode  = res.statusCode;
      const statusMessage  = res.statusMessage;
      const contentLength = res.get('content-length');

      this.logger.log(
        `${method} ${originalUrl} ${statusCode}- ${statusMessage}  ${ip}`,
      );
    });

    next();
  }
}