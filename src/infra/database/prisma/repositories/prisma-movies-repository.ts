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

    const added_movies = await Promise.all(
      prismaGhibliMovies.map(async (movie) => {
        try {
          return await this.prisma.movies.create({
            data: {
              ...movie,
              id: movie.id.toString(),
            },
          });
        } catch (err) {
          if (err.code !== 'P2002') {
            throw err;
          }

          console.log(
            `Skipping movie with ghibli_id ${movie.ghibli_id} because it already exists.`,
          );

          return null;
        }
      }),
    );

    return {
      count: added_movies.filter((movie) => movie !== null).length,
    };
  }

  async findAll(): Promise<Movie[]> {
    const movies = await this.prisma.movies.findMany({
      orderBy: { title: 'asc' },
    });

    return movies.map(PrismaMovieMapper.toDomain);
  }
}
