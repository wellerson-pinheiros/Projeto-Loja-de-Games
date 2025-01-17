import { Injectable } from "@nestjs/common";
import { Categorias } from "../entities/categorias.entitys";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository} from "typeOrm"


@ Injectable()
export class CategoriaService {
    constructor(

        @InjectRepository(Categorias)
        private postagemRepository: Repository<Categorias>
    ){}

    async findAll(): Promise<Categorias[]> {
        return await this.postagemRepository.find()
    }

    



}