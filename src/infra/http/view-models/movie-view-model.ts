import { Movie } from '@application/entities/movie';

export class MovieViewModel {
  static toHTTP(movie: Movie) {
    return {
      id: movie.id,
      banner: movie.banner,
      title: movie.title,
      description: movie.description,
      director: movie.director,
      producer: movie.producer,
    };
  }
}
