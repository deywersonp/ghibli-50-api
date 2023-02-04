import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError, lastValueFrom } from 'rxjs';
import { Movie } from '@application/entities/movie';
import { StudioGhibliService } from '@application/services/studio-ghibli-service';

interface GhibliMovieResponse {
  id: string;
  title: string;
  image: string;
  description: string;
  director: string;
  producer: string;
}

@Injectable()
export class GhibliMoviesService implements StudioGhibliService {
  constructor(private readonly http: HttpService) {}

  async getStudioGhibliMovies(): Promise<Movie[]> {
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

    const ghibliMovies: GhibliMovieResponse[] = await lastValueFrom(request);

    const formattedGhibliMovies = ghibliMovies.map(
      (ghibliMovie) =>
        new Movie({
          ghibli_id: ghibliMovie.id,
          title: ghibliMovie.title,
          banner: ghibliMovie.image,
          description: ghibliMovie.description,
          director: ghibliMovie.director,
          producer: ghibliMovie.producer,
        }),
    );

    return formattedGhibliMovies;
  }
}
