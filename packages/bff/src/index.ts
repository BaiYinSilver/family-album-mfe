import { fastify } from 'fastify';
import { bootstrap } from 'fastify-decorators';

import { resolve } from 'path'

const app = fastify();

app.register(bootstrap, {
    directory: resolve(__dirname, 'modules'),
    mask: /\.controller\./
})

app.listen({ host: "0.0.0.0", port: 8080 }, (err, address) => {
    if (err) {
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})

