import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const LogExecutionTime = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log(data)
    const request = ctx.switchToHttp().getRequest();
    const startTime = Date.now();

    return {
      ...request,
      logExecutionTime: () => {
        const endTime = Date.now();
        console.log(
          `Execution time for ${request.method} ${request.url}: ${endTime - startTime}ms`,
        );
      },
    };
  },
);