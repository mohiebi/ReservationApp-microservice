import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { UsersService } from "./../users/users.service";
import { ConfigService } from "@nestjs/config";
import { Request } from 'express';
import { tokenPayload } from "../interfaces/token-payload.interfaces";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UsersService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: any) => request?.cookies?.Authentication || request?.Authentication
            ]),
            secretOrKey: configService.get('JWT_SECRET'),
        })
    }

    async validate({ userId }: tokenPayload) {
        return await this.userService.getUser({ _id: userId });
    }
}