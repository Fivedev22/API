import { Inmueble } from 'src/modules/property/entities/inmueble.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tipo_inmueble')
export class TipoInmueble {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_inmueble' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 100 })
    nombre: string;

    @OneToMany(() => Inmueble, (inmueble) => inmueble.tipo_inmueble)
    inmueble: Inmueble;
}