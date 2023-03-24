import { Movie } from '@application/entities/movie';
export declare class MovieHTTPModel {
    readonly id: string;
    readonly banner: string;
    readonly title: string;
    readonly description: string;
    readonly director: string;
    readonly producer: string;
}
export declare class MovieViewModel {
    static toHTTP(movie: Movie): {
        id: string;
        banner: string;
        title: string;
        description: string;
        director: string;
        producer: string;
    };
}
