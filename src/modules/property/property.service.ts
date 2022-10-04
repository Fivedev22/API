import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActualizarDto, RegistrarDto } from './dto';
import { Inmueble } from './entities/inmueble.entity';

@Injectable()
export class PropertyService {
    constructor(
        @InjectRepository(Inmueble)
        private inmuebleRepository: Repository<Inmueble>
    ) { }

    public async registrar(body: RegistrarDto) {
        const { referencia } = body;
        const inmueble = await this.inmuebleRepository.findOne(
            {
                where: [{ referencia, inmueble_activo: true }, { referencia, inmueble_activo: false }]
            });
        if (inmueble === null) {
            await this.inmuebleRepository.insert(body);
            return { msg: 'El inmueble se creo correctamente' };
        }
        return { msg: `El inmueble con la REFERENCIA: ${referencia} ya existe` };
    }

    public async actualizar(id: number, body: ActualizarDto) {
        const inmueble = await this.inmuebleRepository.preload({ id, ...body });
        if (inmueble === undefined)
            return { msg: `El inmueble con el ID: ${id} no existe` };
        await this.inmuebleRepository.save(inmueble);
        return { msg: `El inmueble con la REFERENCIA: ${inmueble.referencia} ha sido actualizado` };
    }


    public async archivar(id: number) {
        const inmueble = await this.inmuebleRepository.findOne({ where: { id, inmueble_activo: true } });
        if (inmueble === null)
            return { msg: `El inmueble con el ID: ${id} no existe` };
        inmueble.inmueble_activo = false;
        await this.inmuebleRepository.update(id, inmueble);
        return { msg: `El inmueble ${inmueble.nombre} con el ID: ${id} ha sido archivado` }
    }


    public async obtenerTodos() {
        const inmueble = await this.inmuebleRepository.find(
            {
                relations: ['tipo_actividad', 'tipo_inmueble', 'provincia'],
                where: { inmueble_activo: true },
                order: { id: "ASC" }
            });
        if (!inmueble.length)
            return { msg: 'Tabla vacia, registre un inmueble para mostrar' }
        return inmueble;
    }


    public async obtenerUno(id: number) {
        const inmueble = await this.inmuebleRepository.findOne(
            {
                relations: ['tipo_actividad', 'tipo_inmueble', 'provincia'],
                where: [{ id, inmueble_activo: true }, { id, inmueble_activo: false }]
            });
        if (inmueble === null)
            return { msg: `El inmueble con el ID: ${id} no existe` };
        else if (!inmueble.inmueble_activo)
            return {
                msg: `El inmueble ${inmueble.nombre} con el ID: ${id} existe pero no esta activo`
            };
        return inmueble;
    }
}
