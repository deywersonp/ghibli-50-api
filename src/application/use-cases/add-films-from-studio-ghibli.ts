import { Film } from '../entities/film';
import { FilmsRepository } from '../repositories/films-repository';

interface AddFilmsFromStudioGhibliRequest {
  films: Film[];
}

interface AddFilmsFromStudioGhibliResponse {
  added_films_count: number;
}

export class AddFilmsFromStudioGhibli {
  constructor(private filmsRepository: FilmsRepository) {}

  async execute(
    request: AddFilmsFromStudioGhibliRequest,
  ): Promise<AddFilmsFromStudioGhibliResponse> {
    const { films } = request;

    const { count } = await this.filmsRepository.createMany(films);

    return {
      added_films_count: count,
    };
  }
}
