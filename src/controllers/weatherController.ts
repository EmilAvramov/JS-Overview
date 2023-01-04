import { Router } from 'express';
import readData from '../services/readData';

const router = Router();

router.post('/', async (req, res) => {
	const city = req.body.data.city;
	try {
		const data = await readData();
		const parsedData = JSON.parse(data);
		let result: string = '';
		Object.keys(parsedData).forEach((key: string) => {
			if (key == city) {
				result = parsedData[city]
			}
		})
		if (result) {
			res.status(200).json({temperature: result})
		} else {
			res.status(404).json({message: 'City not found'})
		}
	} catch (err: any) {
		res.status(400).json({message: err})
	}
})

export default router;
