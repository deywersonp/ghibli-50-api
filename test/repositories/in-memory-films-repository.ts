import { Film } from 'src/application/entities/film';
import { FilmsRepository } from 'src/application/repositories/films-repository';

export class InMemoryFilmsRepository implements FilmsRepository {
  public films: Film[] = [];

  async createMany(ghibli_films: Film[]): Promise<{ count: number }> {
    ghibli_films.forEach((ghibli_film) => {
      const alreadyHasThisFilm = this.films.find(
        (film) => ghibli_film.ghibli_id === film.ghibli_id,
      );

      if (Boolean(alreadyHasThisFilm)) {
        return;
      }

      this.films.push(ghibli_film);
    });

    return {
      count: this.films.length,
    };
  }
}
