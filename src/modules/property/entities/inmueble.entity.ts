import { TipoActividad, TipoInmueble, Provincia } from "../../../helpers/entities";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity('inmuebles')
export class Inmueble {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_inmueble' })
    id: number;

    @Column({ type: 'integer', name: 'referencia', unique: true, nullable: false })
    referencia: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false })
    nombre: string;

    @Column({ type: 'integer', name: 'catastro', unique: true, nullable: false })
    catastro: number;

    @Column({ type: 'integer', name: 'metros', nullable: true })
    metros: number;

    @Column({ type: 'varchar', name: 'ciudad', nullable: false })
    ciudad: string;

    @Column({ type: 'varchar', name: 'barrio', nullable: false })
    barrio: string;

    @Column({ type: 'varchar', name: 'calle', nullable: false })
    calle: string;

    @Column({ type: 'integer', name: 'numero', nullable: false })
    numero: number;

    @Column({ type: 'integer', name: 'piso', nullable: true })
    piso: number;

    @Column({ type: 'boolean', name: 'diario', nullable: false })
    diario: boolean;

    @Column({ type: 'boolean', name: 'mensual', nullable: false })
    mensual: boolean;

    @Column({ type: 'boolean', name: 'anual', nullable: false })
    anual: boolean;

    @Column({ type: 'integer', name: 'habitaciones', nullable: false })
    habitaciones: number;

    @Column({ type: 'integer', name: 'banios', nullable: false })
    banios: number;

    @Column({ type: 'boolean', name: 'internet', nullable: false })
    internet: boolean;

    @Column({ type: 'boolean', name: 'pileta', nullable: false })
    pileta: boolean;

    @Column({ type: 'boolean', name: 'cocina', nullable: false })
    cocina: boolean;

    @Column({ type: 'boolean', name: 'lavanderia', nullable: false })
    lavanderia: boolean;

    @Column({ type: 'boolean', name: 'patio', nullable: false })
    patio: boolean;

    @Column({ type: 'boolean', name: 'estacionamiento', nullable: false })
    estacionamiento: boolean;

    @Column({ type: 'boolean', name: 'acceso_discapacitados', nullable: false })
    acceso_discapacitados: boolean;

    @Column({ type: 'boolean', name: 'camas', nullable: false })
    camas: boolean;

    @Column({ type: 'boolean', name: 'disponible', default: true })
    disponible: boolean;

    @Column({ type: 'boolean', default: true, name: "inmueble_activo", nullable: false })
    inmueble_activo: boolean;

    @ManyToOne(() => TipoActividad, { cascade: true })
    @JoinColumn({ name: 'id_actividad' })
    tipo_actividad: TipoActividad;

    @ManyToOne(() => TipoInmueble, { cascade: true })
    @JoinColumn({ name: 'id_tipo_inmueble', })
    tipo_inmueble: TipoInmueble;

    @ManyToOne(() => Provincia, { cascade: true })
    @JoinColumn({ name: 'id_provincia' })
    provincia: Provincia;
}
