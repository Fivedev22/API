import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_usuario' })
    id: number;

    @Column({ type: 'varchar', name: 'usuario', nullable: false, unique: true, length: 30 })
    usuario: string;

    @Column({ type: 'varchar', name: 'correo', nullable: false, unique: true })
    correo: string;

    @Column({ type: 'varchar', name: 'contrasenia', nullable: false, length: 100 })
    contrasenia: string;

    @Column({ type: 'uuid', name: 'resetear_contrasenia', unique: true, nullable: true })
    resetear_contrasenia: string;
}