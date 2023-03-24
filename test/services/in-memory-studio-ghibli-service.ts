import { Movie } from '@application/entities/movie';
import { StudioGhibliService } from '@application/services/studio-ghibli-service';
import { makeMovie } from '@test/factories/movie-factory';

export class InMemoryStudioGhibliService implements StudioGhibliService {
  async getStudioGhibliMovies(): Promise<Movie[]> {
    const movie1 = makeMovie();
    const movie2 = makeMovie({ ghibli_id: 'ghibli-id-2' });
    const movie3 = makeMovie({ ghibli_id: 'ghibli-id-3' });
    const movie4 = makeMovie();

    const movies = [movie1, movie2, movie3, movie4];

    return movies;
  }
}
