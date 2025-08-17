import { IsDefined, IsNotEmptyObject, IsNumber, ValidateNested } from "class-validator";
import { CartDto } from "./card.dto";

export class createChargeDto {
    @IsDefined()
    @IsNotEmptyObject()
    @ValidateNested()
    card: CartDto;

    @IsNumber()
    amount: number;
}