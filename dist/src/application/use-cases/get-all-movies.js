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
exports.GetAllMovies = void 0;
const common_1 = require("@nestjs/common");
const movies_repository_1 = require("../repositories/movies-repository");
let GetAllMovies = class GetAllMovies {
    constructor(moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    async execute(request) {
        let { page } = request;
        let next_page = true;
        const per_page = 10;
        if (!page) {
            page = 1;
        }
        const allMovies = await this.moviesRepository.findAll();
        const total_movies_count = allMovies.length;
        const pageStart = Number(page - 1) * per_page;
        const pageEnd = pageStart + per_page;
        if (pageStart >= total_movies_count || pageEnd >= total_movies_count) {
            next_page = false;
        }
        const paginatedMovies = allMovies.slice(pageStart, pageEnd);
        return {
            movies: paginatedMovies,
            next_page,
            total_movies_count,
        };
    }
};
GetAllMovies = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [movies_repository_1.MoviesRepository])
], GetAllMovies);
exports.GetAllMovies = GetAllMovies;
//# sourceMappingURL=get-all-movies.js.map