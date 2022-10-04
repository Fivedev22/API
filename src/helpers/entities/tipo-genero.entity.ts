import { Cliente } from 'src/modules/client/entities/cliente.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tipo_genero')
export class TipoGenero {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_genero' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 100 })
    nombre: string;

    @OneToMany(() => Cliente, (cliente) => cliente.genero)
    cliente: Cliente;

}