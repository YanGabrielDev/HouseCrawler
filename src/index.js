"use strict";

import Fastify from 'fastify'
import * as dotenv from "dotenv";
dotenv.config();
const app = Fastify({
    logger: true
})

// fastify.get('/', async function (request, reply) {
//     await housesCrawler();
//     reply.code(200).send({ message: "Busca realizada com sucesso" })
// })

// Register your application as a normal plugin.
app.register(import("./app.js"));

export default async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}

// try {
//     await fastify.listen({ port: 3000 })
// } catch (err) {
//     fastify.log.error(err)
//     process.exit(1)
// }