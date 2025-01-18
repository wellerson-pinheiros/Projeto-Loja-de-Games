import { IsNotEmpty } from "class-validator";
import { Categorias } from "src/categorias/entities/categorias.entitys";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_jogos"})
export class Jogos {

    @PrimaryGeneratedColumn()    
    id: number


    @IsNotEmpty()
    @Column({length:255 , nullable:false})
    nome_jogo: string;

    @Column({length:255, nullable: true})
    descricao_jogo: string;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    preco_jogo: number;

    @Column ({nullable: true })
    imagemUrl: string;  // Aqui você vai armazenar a URL ou caminho da imagem})
    
    
    
   // categoria_id: number
    

    
    @ManyToOne(() => Categorias, (categoria) => categoria.jogos)
    categoria: Categorias;
    

}