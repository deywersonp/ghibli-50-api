import express from 'express';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";

import { routes } from './routes';
import swaggerFile from "./swagger.json";

const app = express();

const options = { customCssUrl: '/public/css/swagger-ui.css', customSiteTitle: "Ghibli.50 API - Swagger Documentation" };

app.use(cors({
  exposedHeaders: 'x-total-count'
}));

app.use(express.json());
app.use('/public/css', express.static('public/css'));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile, options));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server Running!');
});

module.exports = app;