import { IsEmail, IsString } from "class-validator"

export class updateUserDTO {
    @IsString()
    name:string

    @IsEmail()
    email: string

}