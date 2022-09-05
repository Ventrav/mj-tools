import express, { Router } from 'express';
import bodyParser from 'body-parser';
import gamesRouter from './routes/games';
import characterSheetsRouter from './routes/character-sheets';

const app = express();
const router = Router();
app.use(bodyParser.json());

app.use(gamesRouter);
app.use(characterSheetsRouter);
app.use(router);

export default {
  path: '/api',
  handler: app,
};
