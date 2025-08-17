import { IsDefined, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";
import { CartDto } from "./card.dto";
import { Type } from "class-transformer";

export class createChargeDto {
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CartDto)
    card: CartDto;

    @IsNumber()
    amount: number;
}