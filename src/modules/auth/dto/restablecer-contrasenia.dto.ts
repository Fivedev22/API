import { IsNotEmpty, IsString, Length, IsUUID } from 'class-validator';

export class RestablecerContraseniaDto {
    @IsNotEmpty()
    @IsUUID('4')
    resetear_contrasenia: string;

    @IsNotEmpty()
    @IsString()
    @Length(10, 100)
    contrasenia: string;
}