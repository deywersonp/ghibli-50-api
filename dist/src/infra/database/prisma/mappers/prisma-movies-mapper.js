"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaMovieMapper = void 0;
const movie_1 = require("../../../../application/entities/movie");
class PrismaMovieMapper {
    static toPrisma(movie) {
        return {
            id: movie.id,
            ghibli_id: movie.ghibli_id,
            title: movie.title,
            banner: movie.banner,
            description: movie.description,
            director: movie.director,
            producer: movie.producer,
        };
    }
    static toDomain(raw) {
        return new movie_1.Movie({
            ghibli_id: raw.ghibli_id,
            title: raw.title,
            banner: raw.banner,
            description: raw.description,
            director: raw.director,
            producer: raw.producer,
        }, raw.id);
    }
}
exports.PrismaMovieMapper = PrismaMovieMapper;
//# sourceMappingURL=prisma-movies-mapper.js.map