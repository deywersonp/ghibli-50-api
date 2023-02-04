import { Movie, MovieProps } from '@application/entities/movie';

type Override = Partial<MovieProps>;

export function makeMovie(override: Override = {}) {
  return new Movie({
    ghibli_id: 'ghibli-id',
    title: 'title',
    description: 'description',
    director: 'director',
    producer: 'producer',
    banner: 'banner',
    ...override,
  });
}
