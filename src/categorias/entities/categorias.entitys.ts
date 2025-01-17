import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: "tb_categorias"})
export class Categorias{

    @PrimaryGeneratedColumn()
    id: Number;

    @IsNotEmpty()
    @Column({length:255 , nullable: true})
    nome_da_categoria_do_Jogo: string;
    
}
