import { InMemoryStudioGhibliService } from '@test/services/in-memory-studio-ghibli-service';
import { InMemoryMoviesRepository } from '@test/repositories/in-memory-movies-repository';
import { AddMoviesFromStudioGhibli } from './add-movies-from-studio-ghibli';

describe('Add Movies from Studio Ghibli', () => {
  it('should be able to add ghibli movies and skip duplicates', async () => {
    const moviesRepository = new InMemoryMoviesRepository();
    const studioGhibliService = new InMemoryStudioGhibliService();
    const addMoviesFromStudioGhibli = new AddMoviesFromStudioGhibli(
      studioGhibliService,
      moviesRepository,
    );

    const { added_movies_count } = await addMoviesFromStudioGhibli.execute();

    expect(added_movies_count).toEqual(3);
  });
});
