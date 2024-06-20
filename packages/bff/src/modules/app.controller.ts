import { FastifyRequest, FastifyReply } from 'fastify';
import { Controller, GET, POST, Inject } from 'fastify-decorators';

// import AlbumService from './album/album.service'

@Controller({
  route: '/api',
})
export default class AppController {

  // @Inject(AlbumService)
  // private readonly AlbumService: AlbumService

  @GET('/albums')
  async getHandler(request: FastifyRequest, reply: FastifyReply) {
    return 'album list';
  }

  @POST()
  async postHandler(request: FastifyRequest, reply: FastifyReply) {
    // create new a new album
  }
}