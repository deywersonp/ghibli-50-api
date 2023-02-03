import { Injectable } from '@nestjs/common';
import { Film } from '../../../../application/entities/film';
import { FilmsRepository } from '../../../../application/repositories/films-repository';
import { PrismaFilmMapper } from '../mappers/prisma-films-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaFilmsRepository implements FilmsRepository {
  constructor(private prisma: PrismaService) {}

  async createMany(ghibli_films: Film[]): Promise<{ count: number }> {
    const prismaGhibliFilms = ghibli_films.map(PrismaFilmMapper.toPrisma);

    const added_films = await this.prisma.film.createMany({
      data: prismaGhibliFilms,
      skipDuplicates: true,
    });

    return {
      count: added_films.count,
    };
  }
}
