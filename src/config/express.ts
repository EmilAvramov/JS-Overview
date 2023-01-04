import express from 'express';
import { cors } from '../middelwares/cors';

import healthController from '../controllers/healthController'

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/health', healthController)

export default app
