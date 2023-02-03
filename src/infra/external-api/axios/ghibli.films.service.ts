import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError, lastValueFrom } from 'rxjs';
import { Film } from '../../../application/entities/film';
import { StudioGhibliService } from '../../../application/services/studio-ghibli-service';

interface GhibliFilmResponse {
  id: string;
  title: string;
  image: string;
  description: string;
  director: string;
  producer: string;
}

@Injectable()
export class GhibliFilmsService implements StudioGhibliService {
  constructor(private readonly http: HttpService) {}

  async getStudioGhibliFilms(): Promise<Film[]> {
    const request = this.http
      .get('https://ghibliapi.vercel.app/films?limit=50')
      .pipe(
        map((res) => {
          return res.data;
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );

    const ghibliFilms: GhibliFilmResponse[] = await lastValueFrom(request);
    console.log({ ghibliFilms });

    const formattedGhibliFilms = ghibliFilms.map(
      (ghibliFilm) =>
        new Film({
          ghibli_id: ghibliFilm.id,
          title: ghibliFilm.title,
          banner: ghibliFilm.image,
          description: ghibliFilm.description,
          director: ghibliFilm.director,
          producer: ghibliFilm.producer,
        }),
    );

    console.log({ formattedGhibliFilms });

    return formattedGhibliFilms;
  }
}
