import { Movie } from '@application/entities/movie';
export declare abstract class MoviesRepository {
    abstract createMany(ghibli_movies: Movie[]): Promise<{
        count: number;
    }>;
    abstract findAll(): Promise<Movie[]>;
}
