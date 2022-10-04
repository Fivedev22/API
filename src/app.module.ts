import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConnection } from '../ormconfig';
import { AuthModule } from './modules/auth/auth.module';
import { ClientModule } from './modules/client/client.module';
import { PropertyModule } from './modules/property/property.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(PostgresConnection),
    AuthModule,
    ClientModule,
    PropertyModule
  ]
})
export class AppModule { }
