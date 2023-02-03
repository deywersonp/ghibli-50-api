import { Film } from '../entities/film';

export abstract class StudioGhibliService {
  abstract getStudioGhibliFilms(): Promise<Film[]>;
}
