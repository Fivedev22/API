import { IsEmail, IsNotEmpty } from 'class-validator';

export class SolicitarRestablecerContraseniaDto {

    @IsNotEmpty()
    @IsEmail()
    correo: string;
}