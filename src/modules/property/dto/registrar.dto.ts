import { IsBoolean, IsNotEmpty, IsNumber, IsString, IsArray } from 'class-validator';
import { TipoInmueble, TipoActividad, Provincia } from "../../../helpers/entities";


export class RegistrarDto {
    @IsNotEmpty()
    @IsNumber()
    referencia: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsNumber()
    catastro: number;

    @IsNotEmpty()
    @IsNumber()
    tipo_inmueble: TipoInmueble;

    @IsNotEmpty()
    @IsNumber()
    metros: number;

    @IsNotEmpty()
    @IsNumber()
    provincia: Provincia;

    @IsNotEmpty()
    @IsString()
    ciudad: string;

    @IsNotEmpty()
    @IsString()
    barrio: string;

    @IsNotEmpty()
    @IsString()
    calle: string;

    @IsNotEmpty()
    @IsNumber()
    numero: number;

    @IsNotEmpty()
    @IsNumber()
    piso: number;

    @IsNotEmpty()
    @IsBoolean()
    diario: boolean;

    @IsNotEmpty()
    @IsBoolean()
    mensual: boolean;

    @IsNotEmpty()
    @IsBoolean()
    anual: boolean;

    @IsNotEmpty()
    @IsNumber()
    habitaciones: number;

    @IsNotEmpty()
    @IsNumber()
    banios: number;

    @IsNotEmpty()
    @IsBoolean()
    internet: boolean;

    @IsNotEmpty()
    @IsBoolean()
    pileta: boolean;

    @IsNotEmpty()
    @IsBoolean()
    cocina: boolean;

    @IsNotEmpty()
    @IsBoolean()
    lavanderia: boolean;

    @IsNotEmpty()
    @IsBoolean()
    patio: boolean;

    @IsNotEmpty()
    @IsBoolean()
    estacionamiento: boolean;

    @IsNotEmpty()
    @IsBoolean()
    acceso_discapacitados: boolean;

    @IsNotEmpty()
    @IsBoolean()
    camas: boolean;

    @IsNotEmpty()
    @IsNumber()
    tipo_actividad: TipoActividad;
}
