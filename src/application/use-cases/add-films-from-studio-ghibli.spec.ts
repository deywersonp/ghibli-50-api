import { InMemoryFilmsRepository } from '../../../test/repositories/in-memory-films-repository';
import { Film } from '../entities/film';
import { AddFilmsFromStudioGhibli } from './add-films-from-studio-ghibli';

describe('Add Films from Studio Ghibli', () => {
  it('should be able to add ghibli films', async () => {
    const filmsRepository = new InMemoryFilmsRepository();
    const addFilmsFromStudioGhibli = new AddFilmsFromStudioGhibli(
      filmsRepository,
    );

    const film1 = new Film({
      ghibli_id: 'ghibli-id',
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      banner: 'banner',
    });

    const film2 = new Film({
      ghibli_id: 'ghibli-id-2',
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      banner: 'banner',
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

    const film1 = new Film({
      ghibli_id: 'ghibli-id',
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      banner: 'banner',
    });

    const film2 = new Film({
      ghibli_id: 'ghibli-id',
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      banner: 'banner',
    });

    const { added_films_count } = await addFilmsFromStudioGhibli.execute({
      films: [film1, film2],
    });

    expect(filmsRepository.films).toHaveLength(1);
    expect(added_films_count).toEqual(1);
  });
});
