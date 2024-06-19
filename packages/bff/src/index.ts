import http from 'http'
import { FastifyReply, FastifyRequest, RouteHandler } from 'fastify'
import dotenv from 'dotenv'
import buildApp from './app'
import createConfig from './config'
import Config from './types/config'
import 'reflect-metadata'

dotenv.config({ path: '.env' })

let handleRequest: RouteHandler | null = null
const config: Readonly<Config> = createConfig()
const serverFactory = (handler: RouteHandler) => {
  handleRequest = handler

  return http.createServer()
}

const app = buildApp({
  serverFactory,
  disableRequestLogging: true
})

// see https://github.com/fastify/fastify/issues/946#issuecomment-766319521
// this is necessary if you want to support JSON inputs in POST/PATCH requests
app.addContentTypeParser('application/json', {}, (req, body, done) => {
  // @ts-expect-error: Community solution
  done(null, body.body)
})

app.addContentTypeParser(['application/x-www-form-urlencoded'], function (request, body, done) {
  // @ts-expect-error: Community solution
  done(null, body.body)
})

if (process.env.NODE_ENV === 'local') {
  app.addHook('preHandler', async (req: FastifyRequest) => {
    if (req.body) {
      req.log.info(req.body, 'Request body')
    }
  })
}

export const bff = (req: FastifyRequest, res: FastifyReply) => {
  app.ready((err: Error | null) => {
    if (err) {
      app.log.fatal(err)
      throw err
    }
    // @ts-expect-error: Community solution
    handleRequest(req, res)
  })
}
