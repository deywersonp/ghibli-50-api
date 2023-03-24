import { Movie } from '@application/entities/movie';
import { MoviesRepository } from '@application/repositories/movies-repository';

export class InMemoryMoviesRepository implements MoviesRepository {
  public movies: Movie[] = [];

  async createMany(ghibli_movies: Movie[]): Promise<{ count: number }> {
    ghibli_movies.forEach((ghibli_movie) => {
      const alreadyHasThisMovie = this.movies.find(
        (movie) => ghibli_movie.ghibli_id === movie.ghibli_id,
      );

      if (Boolean(alreadyHasThisMovie)) {
        return;
      }

      this.movies.push(ghibli_movie);
    });

    return {
      count: this.movies.length,
    };
  }

  async findAll(): Promise<Movie[]> {
    return this.movies;
  }
}
