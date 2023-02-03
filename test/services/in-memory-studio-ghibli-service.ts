import { Film } from 'src/application/entities/film';
import { StudioGhibliService } from 'src/application/services/studio-ghibli-service';
import { makeFilm } from '../factories/film-factory';

export class InMemoryStudioGhibliService implements StudioGhibliService {
  async getStudioGhibliFilms(): Promise<Film[]> {
    const film1 = makeFilm();
    const film2 = makeFilm({ ghibli_id: 'ghibli-id-2' });
    const film3 = makeFilm({ ghibli_id: 'ghibli-id-3' });
    const film4 = makeFilm();

    const films = [film1, film2, film3, film4];

    return films;
  }
}
