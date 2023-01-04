import express from 'express';
import { cors } from '../middelwares/cors';

import healthController from '../controllers/healthController'
import weatherController from '../controllers/weatherController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/health', healthController)
app.use('/weather', weatherController)

export default app
