import express from 'express';
import cors from 'cors';
import path from 'path';
import swaggerUi from "swagger-ui-express";

import { routes } from './routes';
import swaggerFile from "./swagger.json";

const app = express();

const ROOT_FOLDER = path.join(__dirname, '..');
const SRC_FOLDER = path.join(ROOT_FOLDER, 'src');
const options = { customCssUrl: '/public/swagger-ui.css', customSiteTitle: "The Words That I Know API - Swagger" };

app.use(cors({
  exposedHeaders: 'x-total-count'
}));

app.use(express.json());
app.use('/public', express.static(path.join(SRC_FOLDER, 'public')));
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile, options));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server Running!');
});

module.exports = app;