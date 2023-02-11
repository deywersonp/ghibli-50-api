import { Controller, Post, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';
import { GetAllMovies } from '@application/use-cases/get-all-movies';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { MovieViewModel } from '../view-models/movie-view-model';
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
    description:
      'Retorna até 10 filmes de forma paginada. Pode receber um parâmetro de query para informar o valor da página a ser retornada.',
  })
  @ApiOkResponse({
    description: 'The resources were returned successfully',
    type: MovieListResponse,
  })
  async list(
    @Res({ passthrough: true }) res: Response,
    @Query('page') page: number | undefined,
  ) {
    const { movies, next_page, total_movies_count } =
      await this.getAllMovies.execute({ page });

    res.set('x-total-count', String(total_movies_count));

    return {
      movies: movies.map(MovieViewModel.toHTTP),
      next_page,
    };
  }
}
