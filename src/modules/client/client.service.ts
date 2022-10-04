import { Injectable, NotFoundException } from '@nestjs/common';
import {
    ActualizarDto,
    RegistrarDto,
} from './dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cliente } from './entities/cliente.entity';


@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(Cliente)
        private readonly clienteRepository: Repository<Cliente>
    ) { }

    public async registrar(body: RegistrarDto) {
        const { documento } = body;
        const cliente = await this.clienteRepository.findOne(
            {
                where: [{ documento, cliente_activo: true }, { documento, cliente_activo: false }]
            });
        if (cliente === null) {
            await this.clienteRepository.insert(body);
            return { msg: 'El cliente se creo correctamente' }
        }
        return { msg: `El cliente con el DOCUMENTO ${documento} ya existe` };
    }

    public async actualizar(id: number, body: ActualizarDto) {
        const cliente = await this.clienteRepository.preload({ id, ...body });
        if (cliente === undefined)
            return { msg: `El cliente con el ID: ${id} no existe` };
        await this.clienteRepository.save(cliente);
        return { msg: `El cliente ${cliente.nombre} ${cliente.apellido} ha sido actualizado` };
    }

    public async archivar(id: number) {
        const cliente = await this.clienteRepository.findOne({ where: { id, cliente_activo: true } });
        if (cliente === null)
            return { msg: `El cliente con el ID: ${id} no existe` };
        cliente.cliente_activo = false;
        await this.clienteRepository.update(id, cliente);
        return { msg: `El cliente ${cliente.nombre} ${cliente.apellido} con el ID: ${id} ha sido archivado` }
    }

    public async obtenerTodos() {
        const cliente = await this.clienteRepository.find(
            {
                relations: ['genero', 'tipo_documento', 'provincia'],
                where: { cliente_activo: true },
                order: { id: "ASC" }
            }
        )
        if (!cliente.length)
            return { msg: 'Tabla vacia, registre un cliente para mostrar' }
        return cliente;
    }

    public async obtenerUno(id: number) {
        const cliente = await this.clienteRepository.findOne(
            {
                relations: ['genero', 'tipo_documento', 'provincia'],
                where: [{ id, cliente_activo: true }, { id, cliente_activo: false }]
            });
        if (cliente === null)
            return { msg: `El cliente con el ID: ${id} no existe` }
        else if (!cliente.cliente_activo)
            return {
                msg: `El cliente ${cliente.nombre} ${cliente.apellido} con el ID: ${id} existe pero no esta activo`
            }
        return cliente;
    }
}