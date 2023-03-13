import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const UserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const req = ctx.switchToHttp().getRequest();
        console.log('The payload in user id decorator ', req.user);
        console.log('The payload in user id decorator2 ', req.payload);
        return req.user.userId;
    },
);
