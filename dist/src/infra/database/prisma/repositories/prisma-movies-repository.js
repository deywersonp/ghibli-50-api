"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaMoviesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_movies_mapper_1 = require("../mappers/prisma-movies-mapper");
const prisma_service_1 = require("../prisma.service");
let PrismaMoviesRepository = class PrismaMoviesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createMany(ghibli_movies) {
        const prismaGhibliMovies = ghibli_movies.map(prisma_movies_mapper_1.PrismaMovieMapper.toPrisma);
        const added_movies = await Promise.all(prismaGhibliMovies.map(async (movie) => {
            try {
                return await this.prisma.movies.create({
                    data: Object.assign(Object.assign({}, movie), { id: movie.id.toString() }),
                });
            }
            catch (err) {
                if (err.code !== 'P2002') {
                    throw err;
                }
                console.log(`Skipping movie with ghibli_id ${movie.ghibli_id} because it already exists.`);
                return null;
            }
        }));
        return {
            count: added_movies.filter((movie) => movie !== null).length,
        };
    }
    async findAll() {
        const movies = await this.prisma.movies.findMany({
            orderBy: { title: 'asc' },
        });
        return movies.map(prisma_movies_mapper_1.PrismaMovieMapper.toDomain);
    }
};
PrismaMoviesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaMoviesRepository);
exports.PrismaMoviesRepository = PrismaMoviesRepository;
//# sourceMappingURL=prisma-movies-repository.js.map