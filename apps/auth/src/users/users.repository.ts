import { AbstractRepositoy } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { UsersDocument } from "./Models/UsersSchema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersRepository extends AbstractRepositoy<UsersDocument> {
    protected readonly logger = new Logger(UsersRepository.name)

    constructor(@InjectModel(UsersDocument.name) userModel: Model<UsersDocument>) {
        super(userModel);
    }
}