import { TipoGenero, TipoDocumento, Provincia } from "../../../helpers/entities";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Cliente {

    @PrimaryGeneratedColumn({ type: 'integer', name: 'id_cliente' })
    id: number;

    @Column({ type: 'varchar', name: 'nombre', nullable: false, length: 120 })
    nombre: string;

    @Column({ type: 'varchar', name: 'apellido', nullable: false, length: 120 })
    apellido: string;

    @Column({ type: 'varchar', name: 'correo', nullable: true, unique: true })
    correo: string;

    @Column({ type: 'varchar', name: 'telefono', nullable: true, unique: true })
    telefono: string;

    @Column({ type: 'varchar', name: 'documento', nullable: false, unique: true })
    documento: string;

    @Column({ type: 'boolean', name: 'extranjero', nullable: false })
    extranjero: boolean;

    @Column({ type: 'boolean', default: true, name: "cliente_activo", nullable: false })
    cliente_activo: boolean;

    @ManyToOne(() => Provincia, { cascade: true })
    @JoinColumn({ name: 'id_provincia' })
    provincia: Provincia;

    @ManyToOne(() => TipoGenero, { cascade: true })
    @JoinColumn({ name: 'id_genero' })
    genero: TipoGenero;

    @ManyToOne(() => TipoDocumento, { cascade: true })
    @JoinColumn({ name: 'id_documento' })
    tipo_documento: TipoDocumento;
}
