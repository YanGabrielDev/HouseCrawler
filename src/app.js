import { housesCrawler } from "./services/quinto-andar-service.js";

async function routes(fastify, options) {
    fastify.get('/', async (request, reply) => {
        await housesCrawler();
        reply.code(200).send({ message: "Busca realizada com sucesso" });
    });
}

export default routes;
