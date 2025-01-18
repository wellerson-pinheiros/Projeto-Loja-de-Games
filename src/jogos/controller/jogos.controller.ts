import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Jogos } from "../entities/jogos.entitys";
import { JogosService } from "../services/jogos.service";

@Controller("/jogos")
export class JogosController {
  constructor(private readonly jogosService: JogosService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Jogos[]> {
    return this.jogosService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Jogos> {
    return this.jogosService.findById(id);
  }

  @Get('/descricao/:descricao_jogo')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('descricao_jogo') descricao_jogo: string): Promise<Jogos[]> {
    return this.jogosService.findByDescricao(descricao_jogo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() jogos: Jogos): Promise<Jogos> {
    return this.jogosService.create(jogos);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() jogos: Jogos): Promise<Jogos> {
    return this.jogosService.update(jogos);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.jogosService.delete(id);
  }
}
