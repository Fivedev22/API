import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { TipoGenero, TipoDocumento, Provincia } from "../../../helpers/entities";

export class RegistrarDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    apellido: string;

    @IsNotEmpty()
    @IsEmail()
    @IsOptional()
    correo: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    telefono: string;

    @IsNotEmpty()
    @IsString()
    documento: string;

    @IsNotEmpty()
    @IsBoolean()
    extranjero: boolean;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    provincia: Provincia;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    genero: TipoGenero;

    @IsNotEmpty()
    @IsNumber()
    tipo_documento: TipoDocumento;
}