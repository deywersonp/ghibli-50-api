import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

// const options = { customCssUrl: '/public/css/swagger-ui.css', customSiteTitle: "Ghibli.50 API - Swagger Documentation" };

app.use(cors({
  exposedHeaders: 'x-total-count'
}));

app.use(express.json());
app.use(express.static(__dirname + '/public/'));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server Running!');
});

module.exports = app;