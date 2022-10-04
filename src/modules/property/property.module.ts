import { Module } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyController } from './property.controller';
import { Inmueble } from './entities/inmueble.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Inmueble])],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule { }
