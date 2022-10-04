import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('imagen')
export class ImagenInmueble {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_imagen' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 100 })
    ruta: string;
}