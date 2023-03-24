import { Movie } from './movie';

describe('Movie', () => {
  it('should be able to create a movie', () => {
    const movie = new Movie({
      ghibli_id: 'ghibli-id-1',
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      banner: 'banner',
    });

    expect(movie).toBeTruthy();
  });
});
