"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const prisma_1 = require("./services/prisma");
exports.routes = express_1.default.Router();
exports.routes.post('/films/ghibli', async (req, res) => {
    try {
        const { data } = await axios_1.default.get('https://ghibliapi.vercel.app/films?limit=50');
        const films = data.map((film, index) => ({
            id: index + 1,
            title: film.title,
            description: film.description,
            director: film.director,
            producer: film.producer,
            banner: film.image,
        }));
        const added_films = await prisma_1.prisma.film.createMany({
            data: films,
            skipDuplicates: true,
        });
        res.status(201).send({ added_films });
    }
    catch (err) {
        console.log(err);
        res.status(400).send();
    }
});
exports.routes.get('/films', async (req, res) => {
    try {
        let page = req.query.page;
        let next_page = true;
        const per_page = 10;
        if (!page) {
            page = "1";
        }
        const allFilms = await prisma_1.prisma.film.findMany();
        if (!allFilms.length) {
            throw new Error('No films found');
        }
        const total = allFilms.length;
        const pageStart = (Number(page) - 1) * per_page;
        const pageEnd = pageStart + per_page;
        if (pageStart >= total || pageEnd >= total) {
            next_page = false;
        }
        const paginatedFilms = allFilms.slice(pageStart, pageEnd);
        res.set('x-total-count', String(total));
        res.status(200).send({ films: paginatedFilms, next_page });
    }
    catch (err) {
        //@ts-ignore
        res.status(500).send({ error: err.message });
    }
});
