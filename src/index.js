"use strict";

import Fastify from 'fastify';
import * as dotenv from "dotenv";
dotenv.config();

const app = Fastify({
    logger: true
});

// Registrar as rotas do app
app.register(import("./app.js"));

// Função de exportação para a Vercel
export default async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
};
