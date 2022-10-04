import { Inmueble } from 'src/modules/property/entities/inmueble.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tipo_actividad')
export class TipoActividad {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_actividad' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 100 })
    nombre: string;

    @OneToMany(() => Inmueble, (inmueble) => inmueble.tipo_inmueble)
    inmueble: Inmueble;
}