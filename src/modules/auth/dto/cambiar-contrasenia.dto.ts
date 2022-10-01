import { IsNotEmpty, Length, IsString } from 'class-validator';
export class CambiarContraseniaDto {

    @IsNotEmpty()
    @IsString()
    @Length(8, 20)
    contraseniaActual: string;

    @IsNotEmpty()
    @IsString()
    @Length(8, 20)
    contraseniaNueva: string;
}