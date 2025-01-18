import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Jogos } from "../entities/jogos.entitys";


@Injectable()
export class JogosService{
    constructor(
        @InjectRepository(Jogos)
        private jogosRepository: Repository<Jogos>
    ) { }

    async findAll(): Promise<Jogos[]> {
        return await this.jogosRepository.find({
            relations: {
                categoria: true
            }
        });
    }

    async findById(id: number): Promise<Jogos> {

        let jogos = await this.jogosRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        });

        if (!jogos)
            throw new HttpException('Jogo Não encontrado!', HttpStatus.NOT_FOUND);

        return jogos;
    }

    async findByDescricao(descricao_jogo: string): Promise<Jogos[]> {
        return await this.jogosRepository.find({
            where: {
                descricao_jogo: ILike(`%${descricao_jogo}%`)
            },
            relations: {
                categoria: true
            }
        })
    }

    async create(Jogos: Jogos): Promise<Jogos> {
        return await this.jogosRepository.save(Jogos);
    }

    async update(jogos: Jogos): Promise<Jogos> {

        await this.findById(jogos.id);

        return await this.jogosRepository.save(jogos);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.jogosRepository.delete(id);

    }

}