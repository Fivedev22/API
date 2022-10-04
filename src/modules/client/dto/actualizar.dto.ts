import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { TipoGenero, TipoDocumento, Provincia } from "../../../helpers/entities";

export class ActualizarDto {

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
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
    @IsOptional()
    documento: string;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    extranjero: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    cliente_activo: boolean;

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
    @IsOptional()
    tipo_documento: TipoDocumento;
}