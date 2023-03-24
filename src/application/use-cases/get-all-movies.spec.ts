import { makeMovie } from '@test/factories/movie-factory';
import { InMemoryMoviesRepository } from '@test/repositories/in-memory-movies-repository';
import { GetAllMovies } from './get-all-movies';

describe('Get Movies', () => {
  it('should be able to get all movies', async () => {
    const moviesRepository = new InMemoryMoviesRepository();
    const getAllMovies = new GetAllMovies(moviesRepository);

    const movie1 = makeMovie();
    const movie2 = makeMovie({ ghibli_id: 'ghibli-id-2' });
    const movie3 = makeMovie({ ghibli_id: 'ghibli-id-3' });
    const moviesToAdd = [movie1, movie2, movie3];

    await moviesRepository.createMany(moviesToAdd);

    const { movies } = await getAllMovies.execute();

    expect(movies).toHaveLength(3);
    expect(movies).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ghibli_id: 'ghibli-id-1' }),
        expect.objectContaining({ ghibli_id: 'ghibli-id-2' }),
        expect.objectContaining({ ghibli_id: 'ghibli-id-3' }),
      ]),
    );
  });
});
