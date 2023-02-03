import { InMemoryStudioGhibliService } from '../../../test/services/in-memory-studio-ghibli-service';
import { InMemoryFilmsRepository } from '../../../test/repositories/in-memory-films-repository';
import { AddFilmsFromStudioGhibli } from './add-films-from-studio-ghibli';

describe('Add Films from Studio Ghibli', () => {
  it('should be able to add ghibli films and skip duplicates', async () => {
    const filmsRepository = new InMemoryFilmsRepository();
    const studioGhibliService = new InMemoryStudioGhibliService();
    const addFilmsFromStudioGhibli = new AddFilmsFromStudioGhibli(
      studioGhibliService,
      filmsRepository,
    );

    const { added_films_count } = await addFilmsFromStudioGhibli.execute();

    expect(added_films_count).toEqual(3);
  });
});
