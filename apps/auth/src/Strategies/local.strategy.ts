import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "../users/users.service";
import { string } from "joi";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly userService: UsersService,
    ) {
        super({ usernameField: 'email' })
    }

    async validate(email: string, password: string) {
        try {
            return this.userService.varifyUser(email, password);
        } catch (err) {
            throw new UnauthorizedException(err);
        }
    }
}