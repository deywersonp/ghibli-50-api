import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateFilmBody } from './create-film-body';

@Controller('v1')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('films')
  list() {
    return this.prisma.film.findMany();
  }

  @Post('films')
  async create(@Body() body: CreateFilmBody) {
    const { ghibli_id, title, description, producer, director, banner } = body;

    await this.prisma.film.createMany({
      data: {
        id: randomUUID(),
        ghibli_id,
        title,
        description,
        producer,
        director,
        banner,
      },
    });
  }
}
