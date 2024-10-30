import { housesCrawler } from "./services/quinto-andar-service.js";
import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

fastify.get('/', async function (request, reply) {
    await housesCrawler();
    reply.code(200).send({ message: "Busca realizada com sucesso" })
})



try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}