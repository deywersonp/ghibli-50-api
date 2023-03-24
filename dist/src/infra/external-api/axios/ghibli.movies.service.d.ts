import { HttpService } from '@nestjs/axios';
import { Movie } from '@application/entities/movie';
import { StudioGhibliService } from '@application/services/studio-ghibli-service';
export declare class GhibliMoviesService implements StudioGhibliService {
    private readonly http;
    constructor(http: HttpService);
    getStudioGhibliMovies(): Promise<Movie[]>;
}
