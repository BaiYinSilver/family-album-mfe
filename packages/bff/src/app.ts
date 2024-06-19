import fastify from 'fastify'
import fastifyHealthcheck from 'fastify-healthcheck'
import fastifyCors from '@fastify/cors'
import fastifyBoom from 'fastify-boom'
import fastifyCookie from '@fastify/cookie'
import config from './config'
import { bootstrap } from 'fastify-decorators'
import { resolve } from 'path'
import Config from './types/config'

declare module 'fastify' {
    export interface FastifyInstance {
        config: Config
    }
}

function build(opts = {}) {
    const app = fastify(opts)
    app.decorate('config', config())
    app.register(fastifyBoom)
    app.register(fastifyCors)
    app.register(fastifyHealthcheck)
    app.register(fastifyCookie)
    app.register(bootstrap, {
        directory: resolve(__dirname, 'modules'),
        mask: /\.controller\./,
        prefix: '/album'
    })
    return app
}

export default build
