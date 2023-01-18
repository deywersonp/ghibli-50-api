import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { GhibliFilmsService } from './ghibli.films.service';
import { PrismaFilmMapper } from './mappers/prisma-films-mapper';

@Controller('v1/films')
export class AppController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ghibliService: GhibliFilmsService,
  ) {}

  @Get()
  list() {
    return this.prisma.film.findMany();
  }

  @Post()
  async add() {
    const ghibliFilms = await this.ghibliService.getStudioGhibliFilms();
    const prismaGhibliFilms = ghibliFilms.map(PrismaFilmMapper.toPrisma);

    await this.prisma.film.createMany({
      data: prismaGhibliFilms,
      skipDuplicates: true,
    });
  }
}
