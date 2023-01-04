import app from './config/express';

try {
	app.listen(3000, () => console.log(`Server is listening to port 3000...`));
} catch (err) {
	console.log(err);
}
