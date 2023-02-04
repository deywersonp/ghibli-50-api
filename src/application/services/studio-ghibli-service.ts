import { Movie } from '@application/entities/movie';

export abstract class StudioGhibliService {
  abstract getStudioGhibliMovies(): Promise<Movie[]>;
}
