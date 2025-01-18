import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categorias } from './categorias/entities/categorias.entitys';
import { CategoriaModule } from './categorias/categorias.module';
import { Jogos } from './jogos/entities/jogos.entitys';
import { JogosModule } from './jogos/jogos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@1234',
      database: 'db_loja_jogos',
      entities: [Categorias, Jogos ],
      synchronize: true,
    }), 
    CategoriaModule,
    JogosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
