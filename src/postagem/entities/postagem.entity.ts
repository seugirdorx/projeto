import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity ({ name: "tb_postagem" })
export class Postagem {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    titulo: string

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    conteudo: string

    @Column({length: 255, nullable: false})
    data_hora: string

    @Column({nullable: true})
    curtida: number

    @ManyToOne(() => Tema, (tema) => tema.postagem)
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem)
    usuario: Usuario
}