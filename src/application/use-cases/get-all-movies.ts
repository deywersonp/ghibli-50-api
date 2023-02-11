import { Movie } from '@application/entities/movie';
import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '@application/repositories/movies-repository';

interface GetAllMoviesRequest {
  page: number | undefined;
}
interface GetAllMoviesResponse {
  movies: Movie[];
  next_page: boolean;
  total_movies_count: number;
}

@Injectable()
export class GetAllMovies {
  constructor(private moviesRepository: MoviesRepository) {}

  async execute(request: GetAllMoviesRequest): Promise<GetAllMoviesResponse> {
    let { page } = request;
    let next_page = true;

    const per_page = 10;

    if (!page) {
      page = 1;
    }

    const allMovies = await this.moviesRepository.findAll();

    const total_movies_count = allMovies.length;

    const pageStart = Number(page - 1) * per_page;
    const pageEnd = pageStart + per_page;

    if (pageStart >= total_movies_count || pageEnd >= total_movies_count) {
      next_page = false;
    }

    const paginatedMovies = allMovies.slice(pageStart, pageEnd);

    return {
      movies: paginatedMovies,
      next_page,
      total_movies_count,
    };
  }
}
