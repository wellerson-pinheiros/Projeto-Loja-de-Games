import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Categorias } from "../entities/categorias.entitys";
import { InjectRepository } from "@nestjs/typeorm";
import {Repository,ILike,DeleteResult} from "typeOrm"


@ Injectable()
export class CategoriaService {
    
    constructor(

        @InjectRepository(Categorias)
        private categoriasRepository: Repository<Categorias>
    ){}

    async findAll(): Promise<Categorias[]> {
        return await this.categoriasRepository.find()
    }


    async findById(id: number): Promise <Categorias> {

        // SELECT * FROM tb_postagens where id = ?;
        const categorias = await this.categoriasRepository.findOne({
            where:
            {
                id
            },
           
        })
    
    
        if(!categorias)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND)
        return categorias;    
    }

    async findByNome (nome_da_categoria_do_Jogo:string): Promise<Categorias[]>{
        return await this.categoriasRepository.find({
            where:{

             nome_da_categoria_do_Jogo : ILike(`%${nome_da_categoria_do_Jogo}%`),
            },
          
        });
        }

        async create(categorias: Categorias): Promise<Categorias>{
            //insert into tb_postagens (titulo,texto) values (?, ?)
            return await this.categoriasRepository.save(categorias)
        }

        async update(categorias: Categorias): Promise<Categorias>{

            await this.findById(categorias.id)
        
            return await this.categoriasRepository.save(categorias);
    
    }
    
    async delete(id: number): Promise<DeleteResult> {
           
        await this.findById(id);
     
        return await this.categoriasRepository.delete(id);
    
    }


    }