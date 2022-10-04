import { Cliente } from 'src/modules/client/entities/cliente.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('tipo_documento')
export class TipoDocumento {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_documento' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 100 })
    nombre: string;

    @OneToMany(() => Cliente, (cliente) => cliente.tipo_documento)
    cliente: Cliente;
}