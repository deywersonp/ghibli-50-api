import { StudioGhibliService } from '@application/services/studio-ghibli-service';
import { MoviesRepository } from '@application/repositories/movies-repository';
interface AddMoviesFromStudioGhibliResponse {
    added_movies_count: number;
}
export declare class AddMoviesFromStudioGhibli {
    private studioGhibliApi;
    private moviesRepository;
    constructor(studioGhibliApi: StudioGhibliService, moviesRepository: MoviesRepository);
    execute(): Promise<AddMoviesFromStudioGhibliResponse>;
}
export {};
