import { IsNotEmpty, IsString, Length } from 'class-validator';

export class IngresarDto {
    @IsNotEmpty()
    @IsString()
    @Length(10, 30)
    usuario: string;

    @IsNotEmpty()
    @IsString()
    @Length(10, 100)
    contrasenia: string;
}