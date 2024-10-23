import { listHouses } from "../api/quinto-andar-api.js"
import { promises as fs } from 'fs'; // Usar promises do fs
import { getFileData } from "../utils/getFileData.js";

export const housesCrawler = async () => {
    try {
        const houses = await listHouses();
        const savedHouses = await getFileData('houses.json')
        const parsedSavedHouses = JSON.parse(savedHouses)
        // Converte os dados para JSON string
        const housesJson = JSON.stringify(houses);

        if (savedHouses) {
            await handlCheckSavedHouses({ houses, housesJson, parsedSavedHouses })
            return
        }

        // Escreve o arquivo houses.json
        if (housesJson) {
            await fs.writeFile('houses.json', housesJson);
            console.log(`${houses.length} apartamentos encontrados`)
            console.log("Arquivo 'houses.json' salvo com sucesso.");
        }

        console.log("Busca realizada com sucesso");
    } catch (error) {
        console.error("Erro ao concluir busca:", error);
    }
};

const handlCheckSavedHouses = async ({ houses = [], housesJson = '', parsedSavedHouses = [] }) => {
    const newHouses = houses.filter(house => !parsedSavedHouses.some(savedHouses => savedHouses._id === house._id)) || []
    if (newHouses.length > 0) {
        console.log("Novos apartamentos encontrados", newHouses);
        await fs.unlink('houses.json')
        await fs.writeFile('houses.json', housesJson);

    }
}