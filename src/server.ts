import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

import { FilmResponse } from './interfaces';

const app = express();

app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.get('/ghibli-films', async (req, res) => {
  try {
    const { data } = await axios.get<FilmResponse[]>('https://ghibliapi.herokuapp.com/films?limit=50');

    const all50Films = data.concat(...data, ...data).filter((_, index) => index < 50);

    const films = all50Films.map((film, index) => ({
      id: index,
      title: film.title,
      description: film.description,
      director: film.director,
      producer: film.producer,
      banner: film.image,
    }));

    const addedFilms = await prisma.film.createMany({
      data: films,
      skipDuplicates: true,
    });

    res.status(200).send({ addedFilms });
  } catch (err) {
    console.log(err);
    res.status(400).send();
  }
});

app.get('/films', async (req, res) => {
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
    const pageStart = (Number(page) - 1) * Number(per_page);
    const pageEnd = pageStart + Number(per_page);

    if (pageStart >= total) {
      next_page = false;
    }

    const paginatedFilms = allFilms.slice(pageStart, pageEnd);

    res.set('x-total-count', String(total));
    res.status(200).send({ films: paginatedFilms, next_page });
  } catch (err) {
    //@ts-ignore
    res.status(400).send({ error: err.message })
  }
});

app.listen(3333, () => console.log('Running on PORT 3333'));