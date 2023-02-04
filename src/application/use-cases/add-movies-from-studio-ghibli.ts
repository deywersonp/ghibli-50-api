import { Injectable } from '@nestjs/common';
import { StudioGhibliService } from '@application/services/studio-ghibli-service';
import { MoviesRepository } from '@application/repositories/movies-repository';

interface AddMoviesFromStudioGhibliResponse {
  added_movies_count: number;
}

@Injectable()
export class AddMoviesFromStudioGhibli {
  constructor(
    private studioGhibliApi: StudioGhibliService,
    private moviesRepository: MoviesRepository,
  ) {}

  async execute(): Promise<AddMoviesFromStudioGhibliResponse> {
    const ghibliMovies = await this.studioGhibliApi.getStudioGhibliMovies();

    const { count } = await this.moviesRepository.createMany(ghibliMovies);

    return {
      added_movies_count: count,
    };
  }
}
