import { promises as fs } from 'fs'; // Usar promises do fs

export const getFileData = async (path = '') => {
    try {
        return await fs.readFile(path, 'utf8', (error, data) => {
            if (error) {
                console.log("erro ao ler o arquivo");
                return null
            }
            return data
        })
    } catch (error) {
        await fs.writeFile('houses.json', '');

        console.log("Arquivo não existente!");
        return null
    }
} 