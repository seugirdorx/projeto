import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common"
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard"
import { DeleteResult } from "typeorm"
import { Postagem } from "../entities/postagem.entity"
import { PostagemService } from "../service/postagem.service"

@UseGuards(JwtAuthGuard)
@Controller('/postagens')
export class PostagemController {
    constructor(private readonly postagemService: PostagemService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }

    @Get ('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number ): Promise<Postagem> {
        return this.postagemService.findById(id)
    }

    @Get ('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findByTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
        return this.postagemService.findByTitulo(titulo)
    }

    @Get ('/data/:data')
    @HttpCode(HttpStatus.OK)
    findByData_hora(@Param('data_hora') data_hora: string): Promise<Postagem[]> {
        return this.postagemService.findByData_hora(data_hora)
    }

    @Post ()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.create(postagem)
    }

    @Put ()
    @HttpCode(HttpStatus.OK)
    update(@Body() postagem: Postagem): Promise<Postagem> {
        return this.postagemService.update(postagem)
    }

    @Delete ('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.postagemService.delete(id)
    }

}