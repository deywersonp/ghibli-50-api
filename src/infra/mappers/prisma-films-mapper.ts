import { Film as RawFilm } from '@prisma/client';
import { Film } from '../../application/entities/film';

export class PrismaFilmMapper {
  static toPrisma(film: Film) {
    return {
      id: film.id,
      ghibli_id: film.id,
      title: film.title,
      banner: film.banner,
      description: film.description,
      director: film.director,
      producer: film.producer,
    };
  }

  static toDomain(raw: RawFilm): Film {
    return new Film(
      {
        ghibli_id: raw.id,
        title: raw.title,
        banner: raw.banner,
        description: raw.description,
        director: raw.director,
        producer: raw.producer,
      },
      raw.id,
    );
  }
}
