import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Jogos } from "./entities/jogos.entitys";
import { JogosService } from "./services/jogos.service";
import { JogosController } from "./controller/jogos.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Jogos])],
    providers: [JogosService],
    controllers: [JogosController],
    exports: [TypeOrmModule, JogosService],
})
export class JogosModule {}