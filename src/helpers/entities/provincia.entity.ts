import { Cliente } from 'src/modules/client/entities/cliente.entity';
import { Inmueble } from 'src/modules/property/entities/inmueble.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('provincias')
export class Provincia {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_provincia' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 100 })
    nombre: string;

    @OneToMany(() => Cliente, (cliente) => cliente.provincia)
    cliente: Cliente;

    @OneToMany(() => Inmueble, (inmueble) => inmueble.provincia)
    inmueble: Inmueble;
}