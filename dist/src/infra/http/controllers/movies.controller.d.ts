import { Response } from 'express';
import { AddMoviesFromStudioGhibli } from '@application/use-cases/add-movies-from-studio-ghibli';
import { GetAllMovies } from '@application/use-cases/get-all-movies';
export declare class MoviesController {
    private addMoviesFromStudioGhibli;
    private getAllMovies;
    constructor(addMoviesFromStudioGhibli: AddMoviesFromStudioGhibli, getAllMovies: GetAllMovies);
    add(): Promise<{
        added_movies_count: number;
    }>;
    list(res: Response, page: number | undefined): Promise<{
        movies: {
            id: string;
            banner: string;
            title: string;
            description: string;
            director: string;
            producer: string;
        }[];
        next_page: boolean;
    }>;
}
