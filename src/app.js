// "use strict";

// import Fastify from 'fastify';
// import * as dotenv from "dotenv";
// dotenv.config();

// const app = Fastify({
//     logger: true
// });

// // Registrar as rotas do app
// app.register(import("./app.js"));

// // Função de exportação para a Vercel
// export default async (req, res) => {
//     await app.ready();
//     app.server.emit('request', req, res);
// };

import routes from "./routes";

async function app(
    instance,
    opts,
    done
) {
    instance.get("/", async (req, res) => {
        res.status(200).send({
            hello: "World",
        });
    });
    instance.register(routes, { prefix: "/api/v1" });
    done();
}

export default app;