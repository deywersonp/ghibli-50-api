import { Movies as RawMovie } from '@prisma/client';
import { Movie } from '@application/entities/movie';
export declare class PrismaMovieMapper {
    static toPrisma(movie: Movie): {
        id: string;
        ghibli_id: string;
        title: string;
        banner: string;
        description: string;
        director: string;
        producer: string;
    };
    static toDomain(raw: RawMovie): Movie;
}
