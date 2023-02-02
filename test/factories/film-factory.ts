import { Film, FilmProps } from '../../src/application/entities/film';

type Override = Partial<FilmProps>;

export function makeFilm(override: Override = {}) {
  return new Film({
    ghibli_id: 'ghibli-id',
    title: 'title',
    description: 'description',
    director: 'director',
    producer: 'producer',
    banner: 'banner',
    ...override,
  });
}
