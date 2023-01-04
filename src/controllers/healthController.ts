import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	try {
		res.status(200).json({status: 'healthy'})
	} catch (err: any) {
		res.status(400).json({status: 'not healthy'})
	}
})

export default router;
