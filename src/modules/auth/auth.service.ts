import * as bcrypt from 'bcrypt'
import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';

import {
    RegistrarDto,
    SolicitarRestablecerContraseniaDto,
    RestablecerContraseniaDto,
    IngresarDto,
    CambiarContraseniaDto
} from './dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { v4 } from 'uuid';

import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        private readonly jwtService: JwtService
    ) { }


    public async codificarContrasenia(contrasenia: string) {
        const salt = await bcrypt.genSalt();
        return bcrypt.hash(contrasenia, salt);
    }

    public async chequearContrasenia(contrasenia: string, hashedContrasenia: string) {
        return await bcrypt.compare(contrasenia, hashedContrasenia);
    }

    public async buscarPorCorreo(correo: string) {
        const _usuario = await this.usuarioRepository.findOne({ where: { correo } })
        if (!_usuario)
            console.log("error");
        return _usuario;
    }

    public async buscarPorToken(resetear_contrasenia: string) {
        const _usuario = await this.usuarioRepository.findOne({ where: { resetear_contrasenia } })
        if (!_usuario)
            console.log("error");
        return _usuario;
    }

    public async buscarPorUsuario(usuario: string) {
        const _usuario = await this.usuarioRepository.findOne({ where: { usuario } });
        if (!_usuario)
            console.log("error");
        return _usuario;
    }

    public async registrar(body: RegistrarDto): Promise<any> {
        const { contrasenia } = body;
        const hashedContrasenia = await this.codificarContrasenia(contrasenia);
        try {
            await this.usuarioRepository.insert({ ...body, contrasenia: hashedContrasenia });
            return {
                estado: 201,
                mensaje: "Ok"
            }
        } catch (e) {
            return {
                estado: 400,
                mensaje: "Error"
            }
        }
    }

    public async ingresar(body: IngresarDto): Promise<any> {
        const { usuario, contrasenia } = body
        const _usuario = await this.buscarPorUsuario(usuario);
        if (_usuario && (await this.chequearContrasenia(contrasenia, _usuario.contrasenia))) {
            const payload: JwtPayload = { id: _usuario.id, usuario: _usuario.usuario };
            const tokenAcceso = this.jwtService.sign(payload);
            return {
                esatado: 200,
                mensaje: tokenAcceso
            }
        }
        throw new UnauthorizedException();

    }

    public async cambiarContrasenia(body: CambiarContraseniaDto, usuario: Usuario) {
        const { contraseniaActual, contraseniaNueva } = body;
        try {
            if (await this.chequearContrasenia(contraseniaActual, usuario.contrasenia)) {
                usuario.contrasenia = await this.codificarContrasenia(contraseniaNueva);
                await this.usuarioRepository.save(usuario);
            }
            return {
                estado: 200,
                mensaje: "Ok"
            }
        } catch (e) {
            return {
                estado: 400,
                mensaje: "Error"
            }
        }
    }

    public async solicitarRestablecerContrasenia(body: SolicitarRestablecerContraseniaDto) {
        const { correo } = body;
        const _usuario = await this.buscarPorCorreo(correo);
        _usuario.resetear_contrasenia = v4();
        try {
            this.usuarioRepository.save(_usuario);
            return {
                estado: 201,
                mensaje: "Ok"
            }
        } catch (e) {
            return {
                estado: 400,
                mensaje: "Error"
            }
        }
    }

    public async restablecerContrasenia(body: RestablecerContraseniaDto) {
        const { resetear_contrasenia, contrasenia } = body;
        const _usuario = await this.buscarPorToken(resetear_contrasenia);
        _usuario.contrasenia = await this.codificarContrasenia(contrasenia);
        _usuario.resetear_contrasenia = null;
        try {
            this.usuarioRepository.save(_usuario);
            return {
                estado: 201,
                mensaje: "Ok"
            }
        } catch (e) {
            return {
                estado: 400,
                mensaje: "Error"
            }
        }
    }

}
