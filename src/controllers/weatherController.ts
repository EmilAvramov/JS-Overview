import { Router } from 'express';
import readData from '../services/readData';

const router = Router();

router.post('/', async (req, res) => {
	const city = req.body.city;
	console.log(city)
	readData();
	try {
		res.status(200).json({status: 'healthy'})
	} catch (err: any) {
		res.status(400).json({status: 'not healthy'})
	}
})

export default router;
