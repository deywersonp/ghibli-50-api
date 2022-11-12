import express from 'express';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";

import { routes } from './routes';
import swaggerFile from "./swagger.json";

const app = express();

app.use(cors({
  exposedHeaders: 'x-total-count'
}));

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('HTTP Server Running!');
});