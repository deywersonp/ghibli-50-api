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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const add_movies_from_studio_ghibli_1 = require("../../../application/use-cases/add-movies-from-studio-ghibli");
const get_all_movies_1 = require("../../../application/use-cases/get-all-movies");
const swagger_1 = require("@nestjs/swagger");
const movie_view_model_1 = require("../view-models/movie-view-model");
const movie_add_response_1 = require("../response-types/movies/movie-add-response");
const movie_list_response_1 = require("../response-types/movies/movie-list-response");
let MoviesController = class MoviesController {
    constructor(addMoviesFromStudioGhibli, getAllMovies) {
        this.addMoviesFromStudioGhibli = addMoviesFromStudioGhibli;
        this.getAllMovies = getAllMovies;
    }
    async add() {
        const { added_movies_count } = await this.addMoviesFromStudioGhibli.execute();
        return {
            added_movies_count,
        };
    }
    async list(res, page) {
        const { movies, next_page, total_movies_count } = await this.getAllMovies.execute({ page });
        res.set('x-total-count', String(total_movies_count));
        return {
            movies: movies.map(movie_view_model_1.MovieViewModel.toHTTP),
            next_page,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Adiciona filmes ao banco de dados',
        description: 'Adiciona filmes do Studio Ghibli ao banco de dados',
    }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'Created Successfully',
        type: movie_add_response_1.MovieAddResponse,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "add", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Lista filmes',
        description: 'Retorna até 10 filmes de forma paginada. Pode receber um parâmetro de query para informar o valor da página a ser retornada.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'The resources were returned successfully',
        type: movie_list_response_1.MovieListResponse,
    }),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Query)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "list", null);
MoviesController = __decorate([
    (0, swagger_1.ApiTags)('Movies'),
    (0, common_1.Controller)('v1/movies'),
    __metadata("design:paramtypes", [add_movies_from_studio_ghibli_1.AddMoviesFromStudioGhibli,
        get_all_movies_1.GetAllMovies])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map