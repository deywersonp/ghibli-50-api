import { Controller, Post } from '@nestjs/common';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';

@Controller('v1/movies')
export class MoviesController {
  constructor(private addMoviesFromStudioGhibli: AddMoviesFromStudioGhibli) {}

  @Post()
  async add() {
    const { added_movies_count } =
      await this.addMoviesFromStudioGhibli.execute();

    return {
      added_movies_count,
    };
  }
}
