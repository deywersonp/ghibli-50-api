import { Film } from '@application/entities/film';

export abstract class StudioGhibliService {
  abstract getStudioGhibliFilms(): Promise<Film[]>;
}
