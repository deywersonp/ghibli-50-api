import { Movie } from '@application/entities/movie';
import { MoviesRepository } from '@application/repositories/movies-repository';
interface GetAllMoviesRequest {
    page: number | undefined;
}
interface GetAllMoviesResponse {
    movies: Movie[];
    next_page: boolean;
    total_movies_count: number;
}
export declare class GetAllMovies {
    private moviesRepository;
    constructor(moviesRepository: MoviesRepository);
    execute(request: GetAllMoviesRequest): Promise<GetAllMoviesResponse>;
}
export {};
