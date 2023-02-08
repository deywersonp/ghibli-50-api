import { Movie } from '@application/entities/movie';
import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '@application/repositories/movies-repository';

interface GetAllMoviesResponse {
  movies: Movie[];
}

@Injectable()
export class GetAllMovies {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(): Promise<GetAllMoviesResponse> {
    const movies = await this.moviesRepository.findAll();

    return {
      movies,
    };
  }
}
