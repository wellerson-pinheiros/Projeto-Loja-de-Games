import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias } from './categorias/entities/categorias.entitys';
import { CategoriaModule } from './categorias/categorias.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'db_loja_jogos',
      entities: [Categorias],
      synchronize: true,
    }), 
    CategoriaModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
