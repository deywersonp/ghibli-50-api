import { Movie } from '@application/entities/movie';
import { MoviesRepository } from '@application/repositories/movies-repository';
import { PrismaService } from '../prisma.service';
export declare class PrismaMoviesRepository implements MoviesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createMany(ghibli_movies: Movie[]): Promise<{
        count: number;
    }>;
    findAll(): Promise<Movie[]>;
}
