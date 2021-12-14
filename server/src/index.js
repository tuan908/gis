import express from 'express';
import cors from 'cors';
import morgan from "morgan";
import dotenv from 'dotenv';
import DatabaseConfig from './database.js';
import router from './route.js';

const app = express();

dotenv.config({ path: '.env' });
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(
  express.urlencoded({
    extended: true,
  })
);

DatabaseConfig();

app.use(router);

app.listen(8080, () => console.log('Server listen on port 8080'));
