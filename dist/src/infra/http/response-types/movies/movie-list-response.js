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
exports.MovieListResponse = void 0;
const movie_view_model_1 = require("../../view-models/movie-view-model");
const swagger_1 = require("@nestjs/swagger");
class MovieListResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        isArray: true,
        type: movie_view_model_1.MovieHTTPModel,
        example: [
            {
                id: '69196a1b-cd58-4bf1-8dfb-7862147a60dc',
                banner: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
                title: 'Castle in the Sky',
                description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
                director: 'Hayao Miyazaki',
                producer: 'Isao Takahata',
            },
        ],
    }),
    __metadata("design:type", Array)
], MovieListResponse.prototype, "movies", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: Boolean }),
    __metadata("design:type", Boolean)
], MovieListResponse.prototype, "next_page", void 0);
exports.MovieListResponse = MovieListResponse;
//# sourceMappingURL=movie-list-response.js.map