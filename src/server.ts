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

app.listen(3333, () => console.log('Running on PORT 3333'));