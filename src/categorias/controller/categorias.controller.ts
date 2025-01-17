import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { CategoriaService } from "../services/categorias.service";
import { Categorias } from "../entities/categorias.entitys";


@Controller("/categorias")
export class CategoriaController{
    constructor( private readonly categoriaService: CategoriaService){}


        @Get()
        @HttpCode(HttpStatus.OK)
        findAll(): Promise<Categorias[]>{
            return this.categoriaService.findAll();
        }
}

