import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { TipoInmueble, TipoActividad, Provincia } from "../../../helpers/entities";


export class ActualizarDto {
    @IsNotEmpty()
    @IsString()
    @IsOptional()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    catastro: number;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    tipo_inmueble: TipoInmueble;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    metros: number;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    provincia: Provincia;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    ciudad: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    barrio: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    calle: string;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    numero: number;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    piso: number;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    diario: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    mensual: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    anual: boolean;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    habitaciones: number;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    banios: number;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    internet: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    pileta: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    cocina: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    lavanderia: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    patio: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    estacionamiento: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    acceso_discapacitados: boolean;

    @IsNotEmpty()
    @IsBoolean()
    @IsOptional()
    camas: boolean;

    @IsNotEmpty()
    @IsNumber()
    @IsOptional()
    tipo_actividad: TipoActividad;
}
