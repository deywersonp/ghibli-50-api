import { Injectable } from '@nestjs/common';
import { Movie } from '@application/entities/movie';
import { MoviesRepository } from '@application/repositories/movies-repository';
import { PrismaMovieMapper } from '../mappers/prisma-movies-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaMoviesRepository implements MoviesRepository {
  constructor(private prisma: PrismaService) {}

  async createMany(ghibli_movies: Movie[]): Promise<{ count: number }> {
    const prismaGhibliMovies = ghibli_movies.map(PrismaMovieMapper.toPrisma);

    const added_movies = await this.prisma.movie.createMany({
      data: prismaGhibliMovies,
      skipDuplicates: true,
    });

    return {
      count: added_movies.count,
    };
  }

  async findAll(): Promise<Movie[]> {
    const movies = await this.prisma.movie.findMany();

    return movies.map(PrismaMovieMapper.toDomain);
  }
}
