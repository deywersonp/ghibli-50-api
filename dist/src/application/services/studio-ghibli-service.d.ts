import { Movie } from '@application/entities/movie';
export declare abstract class StudioGhibliService {
    abstract getStudioGhibliMovies(): Promise<Movie[]>;
}
