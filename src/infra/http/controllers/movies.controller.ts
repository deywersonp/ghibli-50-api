import { Controller, Post, Get } from '@nestjs/common';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';
import { GetAllMovies } from '@application/use-cases/get-all-movies';
import { MovieViewModel } from '../view-models/movie-view-model';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { MovieAddResponse } from '../response-types/movies/movie-add-response';
import { MovieListResponse } from '../response-types/movies/movie-list-response';

@ApiTags('Movies')
@Controller('v1/movies')
export class MoviesController {
  constructor(
    private addMoviesFromStudioGhibli: AddMoviesFromStudioGhibli,
    private getAllMovies: GetAllMovies,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Adiciona filmes ao banco de dados',
    description: 'Adiciona filmes do Studio Ghibli ao banco de dados',
  })
  @ApiCreatedResponse({
    description: 'Created Successfully',
    type: MovieAddResponse,
  })
  async add() {
    const { added_movies_count } =
      await this.addMoviesFromStudioGhibli.execute();

    return {
      added_movies_count,
    };
  }

  @Get()
  @ApiOperation({
    summary: 'Lista filmes',
    description: 'Retorna todos os filmes disponíveis',
  })
  @ApiOkResponse({
    description: 'The resources were returned successfully',
    type: MovieListResponse,
  })
  async list() {
    const { movies } = await this.getAllMovies.execute();

    return {
      movies: movies.map(MovieViewModel.toHTTP),
    };
  }
}
