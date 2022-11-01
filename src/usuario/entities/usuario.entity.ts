import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false})
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(255)
    @Column({length: 255, nullable: false, unique: true})
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    senha: string

    @Column({length: 5000, nullable: true})
    foto: string

    @OneToMany(() => Postagem, (postagem) => postagem.usuario, {
        onDelete: "CASCADE"
    })
    postagem: Postagem[]
}