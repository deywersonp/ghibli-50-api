import { MovieHTTPModel } from '@infra/http/view-models/movie-view-model';
export declare class MovieListResponse {
    movies: MovieHTTPModel[];
    readonly next_page: boolean;
}
