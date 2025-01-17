import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
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

        @Get('/:id')
        @HttpCode(HttpStatus.OK)
        findById (@Param('id', ParseIntPipe) id : number): Promise<Categorias>{
            return this.categoriaService.findById(id);
        }

        @Get('/nome/:nome_da_categoria_do_Jogo')
        @HttpCode(HttpStatus.OK)
        findByNome (@Param('nome_da_categoria_do_Jogo') nome_da_categoria_do_Jogo: string): Promise<Categorias[]>{
            return this.categoriaService.findByNome(nome_da_categoria_do_Jogo);
        }

        @Post()
        @HttpCode(HttpStatus.CREATED)
        create(@Body() categorias:Categorias): Promise<Categorias>{
        return this.categoriaService.create(categorias);
    }


        @Put()
        @HttpCode(HttpStatus.OK)
        update(@Body() categorias:Categorias): Promise<Categorias>{
        return this.categoriaService.update(categorias);
    }


        @Delete('/:id')
        @HttpCode(HttpStatus.NO_CONTENT)
        delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id);
    }

}

