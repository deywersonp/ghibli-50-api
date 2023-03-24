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
exports.GhibliMoviesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
const movie_1 = require("../../../application/entities/movie");
let GhibliMoviesService = class GhibliMoviesService {
    constructor(http) {
        this.http = http;
    }
    async getStudioGhibliMovies() {
        const request = this.http
            .get('https://ghibliapi.vercel.app/films?limit=50')
            .pipe((0, rxjs_1.map)((res) => {
            return res.data;
        }))
            .pipe((0, rxjs_1.catchError)(() => {
            throw new common_1.ForbiddenException('API not available');
        }));
        const ghibliMovies = await (0, rxjs_1.lastValueFrom)(request);
        const formattedGhibliMovies = ghibliMovies.map((ghibliMovie) => new movie_1.Movie({
            ghibli_id: ghibliMovie.id,
            title: ghibliMovie.title,
            banner: ghibliMovie.image,
            description: ghibliMovie.description,
            director: ghibliMovie.director,
            producer: ghibliMovie.producer,
        }));
        return formattedGhibliMovies;
    }
};
GhibliMoviesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], GhibliMoviesService);
exports.GhibliMoviesService = GhibliMoviesService;
//# sourceMappingURL=ghibli.movies.service.js.map