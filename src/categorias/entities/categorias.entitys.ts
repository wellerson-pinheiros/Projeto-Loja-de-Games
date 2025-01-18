import { IsNotEmpty } from 'class-validator';
import { Jogos } from 'src/jogos/entities/jogos.entitys';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity({name: "tb_categorias"})
export class Categorias{

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length:255 , nullable: true})
    nome_da_categoria_do_Jogo: string;
    
    @OneToMany(() => Jogos, (jogo) => jogo.categoria)
    jogos: Jogos[];
}
 