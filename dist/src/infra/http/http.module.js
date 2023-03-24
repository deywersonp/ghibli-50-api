"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const add_movies_from_studio_ghibli_1 = require("../../application/use-cases/add-movies-from-studio-ghibli");
const database_module_1 = require("../database/database.module");
const axios_module_1 = require("../external-api/axios/axios.module");
const movies_controller_1 = require("./controllers/movies.controller");
const get_all_movies_1 = require("../../application/use-cases/get-all-movies");
let HttpModule = class HttpModule {
};
HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, axios_module_1.AxiosApiModule],
        controllers: [movies_controller_1.MoviesController],
        providers: [add_movies_from_studio_ghibli_1.AddMoviesFromStudioGhibli, get_all_movies_1.GetAllMovies],
    })
], HttpModule);
exports.HttpModule = HttpModule;
//# sourceMappingURL=http.module.js.map