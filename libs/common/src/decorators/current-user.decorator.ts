import { createParamDecorator, ExecutionContext, } from "@nestjs/common";
import { UsersDocument } from "../../../../apps/auth/src/users/Models/UsersSchema";

const getCurrentUserByContext = (context: ExecutionContext): UsersDocument => {
    return context.switchToHttp().getRequest().user;
};

export const CurrentUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => getCurrentUserByContext(context)
);