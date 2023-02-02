import { makeFilm } from '../../../test/factories/film-factory';
import { InMemoryFilmsRepository } from '../../../test/repositories/in-memory-films-repository';
import { AddFilmsFromStudioGhibli } from './add-films-from-studio-ghibli';

describe('Add Films from Studio Ghibli', () => {
  it('should be able to add ghibli films', async () => {
    const filmsRepository = new InMemoryFilmsRepository();
    const addFilmsFromStudioGhibli = new AddFilmsFromStudioGhibli(
      filmsRepository,
    );

    const film1 = makeFilm();
    const film2 = makeFilm({
      ghibli_id: 'ghibli-id-2',
    });

    const { added_films_count } = await addFilmsFromStudioGhibli.execute({
      films: [film1, film2],
    });

    expect(filmsRepository.films).toHaveLength(2);
    expect(added_films_count).toEqual(2);
  });

  it('should be able to skip duplicated ghibli films', async () => {
    const filmsRepository = new InMemoryFilmsRepository();
    const addFilmsFromStudioGhibli = new AddFilmsFromStudioGhibli(
      filmsRepository,
    );

    const film1 = makeFilm();
    const film2 = makeFilm();

    const { added_films_count } = await addFilmsFromStudioGhibli.execute({
      films: [film1, film2],
    });

    expect(filmsRepository.films).toHaveLength(1);
    expect(added_films_count).toEqual(1);
  });
});
