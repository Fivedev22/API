
import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { ClientService } from './client.service';
import {
  ActualizarDto,
  RegistrarDto
} from './dto';

@Controller('cliente')
export class ClientController {
  constructor(private readonly clientService: ClientService) { }

  @Post('/registrar')
  registrar(@Body() body: RegistrarDto) {
    return this.clientService.registrar(body);
  }

  @Put('/actualizar/:id')
  actualizar(@Param('id') id: number, @Body() body: ActualizarDto) {
    return this.clientService.actualizar(+id, body);
  }

  @Put('/archivar/:id')
  archivar(@Param('id') id: number) {
    return this.clientService.archivar(+id);
  }

  @Get('/')
  obtenerTodos() {
    return this.clientService.obtenerTodos();
  }

  @Get('/:id')
  obtenerUno(@Param('id') id: number) {
    return this.clientService.obtenerUno(+id);
  }

 

}
