"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosApiModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const ghibli_movies_service_1 = require("./ghibli.movies.service");
const studio_ghibli_service_1 = require("../../../application/services/studio-ghibli-service");
let AxiosApiModule = class AxiosApiModule {
};
AxiosApiModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [
            {
                provide: studio_ghibli_service_1.StudioGhibliService,
                useClass: ghibli_movies_service_1.GhibliMoviesService,
            },
        ],
        exports: [studio_ghibli_service_1.StudioGhibliService],
    })
], AxiosApiModule);
exports.AxiosApiModule = AxiosApiModule;
//# sourceMappingURL=axios.module.js.map