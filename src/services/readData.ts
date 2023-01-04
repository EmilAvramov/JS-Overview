const fs = require('fs/promises');

const readData = async () => {
    try {
        const data = await fs.readFile('../data/weather.json', { encoding: 'utf8' });
        console.log(data);
      } catch (err) {
        console.log(err);
      } 
}

export default readData;