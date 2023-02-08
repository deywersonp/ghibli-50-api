import { Controller, Post, Get } from '@nestjs/common';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';
import { GetAllMovies } from '@application/use-cases/get-all-movies';
import { MovieViewModel } from '../view-models/movie-view-model';

@Controller('v1/movies')
export class MoviesController {
  constructor(
    private addMoviesFromStudioGhibli: AddMoviesFromStudioGhibli,
    private getAllMovies: GetAllMovies,
  ) {}

  @Post()
  async add() {
    const { added_movies_count } =
      await this.addMoviesFromStudioGhibli.execute();

    return {
      added_movies_count,
    };
  }

  @Get()
  async movieList() {
    const { movies } = await this.getAllMovies.execute();

    return {
      movies: movies.map(MovieViewModel.toHTTP),
    };
  }
}
