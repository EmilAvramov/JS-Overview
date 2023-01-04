import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(__dirname, '../data/weather.json')

const readData = async () => {
    try {
        return await fs.readFile(filePath, { encoding: 'utf8' });
      } catch {
        return 'Something went wrong'
      } 
}

export default readData;