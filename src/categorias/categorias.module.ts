import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categorias } from "./entities/categorias.entitys";
import { CategoriaController } from "./controller/categorias.controller";
import { CategoriaService } from "./services/categorias.service";


@Module({
    imports: [TypeOrmModule.forFeature([Categorias])], // importando todo o modelo de typeORM do modelo de categorias que basicamente é todos os atributos e o typeOrm.
    controllers: [CategoriaController], // importa a classe que está dentro de categoria.controller
    providers: [CategoriaService], // sempre importa, oque está na classe categoria service
    exports: [], // importa o typeOrm module o mesmo que chamei dentro de imports. pra tudo isso ser usado dentro de app.module
}) 
export class CategoriaModule {}
