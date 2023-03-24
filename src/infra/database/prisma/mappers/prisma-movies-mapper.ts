import { Movies as RawMovie } from '@prisma/client';
import { Movie } from '@application/entities/movie';

export class PrismaMovieMapper {
  static toPrisma(movie: Movie) {
    return {
      id: movie.id,
      ghibli_id: movie.ghibli_id,
      title: movie.title,
      banner: movie.banner,
      description: movie.description,
      director: movie.director,
      producer: movie.producer,
    };
  }

  static toDomain(raw: RawMovie): Movie {
    return new Movie(
      {
        ghibli_id: raw.ghibli_id,
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
