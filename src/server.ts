import express from 'express';
import path from 'path';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { routes } from './routes';

const app = express();

const ROOT_FOLDER = path.join(__dirname, '..');
const SRC_FOLDER = path.join(ROOT_FOLDER, 'src');

const options = { customCssUrl: '/public/css/swagger-ui.css', customSiteTitle: "Ghibli.50 API - Swagger Documentation" };

app.use(cors({
  exposedHeaders: 'x-total-count'
}));

app.use(express.json());
app.use('/public', express.static(path.join(SRC_FOLDER, 'public')));
app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerFile, options));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server Running!');
});


module.exports = app;