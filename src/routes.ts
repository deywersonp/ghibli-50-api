import express from 'express';
import swaggerUi from "swagger-ui-express";
import { prisma } from "./services/prisma";
import { filmsData } from './data';
import swaggerFile from "./swagger.json";

export const routes = express.Router();

const options = { customCssUrl: __dirname + '/public/css/swagger-ui.css' };

routes.use('/api-docs', (req: any, res: any, next: any) => {
  //@ts-ignore
  swaggerFile.host = req.get('host');
  req.swaggerDoc = swaggerFile;
  next();
}, swaggerUi.serve, swaggerUi.setup(swaggerFile, options));

routes.post('/films/ghibli', async (req, res) => {
  try {
    // const { data } = await axios.get<FilmResponse[]>('https://ghibliapi.herokuapp.com/films?limit=50');

    const data = filmsData.films;

    const films = data.map((film, index) => ({
      id: index + 1,
      title: film.title,
      description: film.description,
      director: film.director,
      producer: film.producer,
      banner: film.image,
    }));

    const added_films = await prisma.film.createMany({
      data: films,
      skipDuplicates: true,
    });

    res.status(201).send({ added_films });
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

routes.get('/films', async (req, res) => {
  try {
    let page = req.query.page;
    let next_page = true;
    const per_page = 10;

    if (!page) {
      page = "1";
    }

    const allFilms = await prisma.film.findMany();

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
  } catch (err) {
    //@ts-ignore
    res.status(500).send({ error: err.message })
  }
});