import { Injectable } from '@nestjs/common';
import { StudioGhibliService } from '@application/services/studio-ghibli-service';
import { FilmsRepository } from '@application/repositories/films-repository';

interface AddFilmsFromStudioGhibliResponse {
  added_films_count: number;
}
@Injectable()
export class AddFilmsFromStudioGhibli {
  constructor(
    private studioGhibliApi: StudioGhibliService,
    private filmsRepository: FilmsRepository,
  ) {}

  async execute(): Promise<AddFilmsFromStudioGhibliResponse> {
    const ghibliFilms = await this.studioGhibliApi.getStudioGhibliFilms();

    const { count } = await this.filmsRepository.createMany(ghibliFilms);

    return {
      added_films_count: count,
    };
  }
}
