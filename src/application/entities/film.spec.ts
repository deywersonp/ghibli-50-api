import { Film } from './film';

describe('Film', () => {
  it('should be able to create a film', () => {
    const film = new Film({
      ghibli_id: 'ghibli-id',
      title: 'title',
      description: 'description',
      director: 'director',
      producer: 'producer',
      banner: 'banner',
    });

    expect(film).toBeTruthy();
  });
});
