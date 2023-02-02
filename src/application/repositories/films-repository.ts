import { Film } from '../entities/film';

export abstract class FilmsRepository {
  abstract createMany(ghibli_films: Film[]): Promise<{ count: number }>;
}
