import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class RegistrarDto {
    @IsNotEmpty()
    @IsString()
    @Length(10, 30)
    usuario: string;

    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    @IsString()
    @Length(10, 100)
    contrasenia: string;
}