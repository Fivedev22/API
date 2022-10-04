import { Body, Controller, Param, Post, Put, Get } from '@nestjs/common';
import { RegistrarDto, ActualizarDto } from './dto';
import { PropertyService } from './property.service';

@Controller('inmueble')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) { }

  @Post('/registrar')
  registrar(@Body() body: RegistrarDto) {
    return this.propertyService.registrar(body)
  }

  @Put('actualizar/:id')
  actualizar(@Param('id') id: number, @Body() body: ActualizarDto) {
    return this.propertyService.actualizar(+id, body);
  }

  @Put('/archivar/:id')
  archivar(@Param('id') id: number) {
    return this.propertyService.archivar(+id);
  }


  @Get('/')
  obtenerTodos() {
    return this.propertyService.obtenerTodos();
  }


  @Get('/:id')
  obtenerUno(@Param('id') id: number) {
    return this.propertyService.obtenerUno(+id);
  }

}
