import { Body, Controller, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

import {
  RegistrarDto,
  RestablecerContraseniaDto,
  SolicitarRestablecerContraseniaDto,
  IngresarDto,
  CambiarContraseniaDto
} from './dto';

import { Usuario } from './entities/usuario.entity';
import { User } from './user.decorator';

@Controller('usuario')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/registro')
  registrar(@Body() body: RegistrarDto) {
    return this.authService.registrar(body);
  }

  @Post('/ingreso')
  ingresar(@Body() body: IngresarDto) {
    return this.authService.ingresar(body);
  }

  @Put('/cambiar-contrasenia')
  @UseGuards(AuthGuard())
  cambiarContrasenia(@Body() body: CambiarContraseniaDto, @User() usuario: Usuario) {
    return this.authService.cambiarContrasenia(body, usuario)
  }

  @Put('/solicitar-restablecer-contrasenia')
  solicitarRestablecerContrasenia(@Body() body: SolicitarRestablecerContraseniaDto) {
    return this.authService.solicitarRestablecerContrasenia(body);
  }

  @Put('/restablecer-contrasenia')
  restablecerContrasenia(@Body() body: RestablecerContraseniaDto) {
    return this.authService.restablecerContrasenia(body);
  }
}

