import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import DatabaseConfig from './database.js';

const app = express();

dotenv.config({ path: '.env' });
app.use(express.json());
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

DatabaseConfig();

app.listen(8080, () => console.log('Server listen on port 8080'));
