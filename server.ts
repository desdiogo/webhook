import fastify, {FastifyRequest} from 'fastify'
import { HOST, PORT } from './env'
import { prismaPlugin } from './plugins/prisma'

const server = fastify()
server.register(prismaPlugin)

type WebHookRequest = FastifyRequest<{
  Querystring: { validationToken?: string }
}>

server.post('/webhook', async (request: WebHookRequest, reply) => {
  const body = request.body
  if(body) {
    try {
      await server.prisma.webhook.create({
        data: {
          data: body
        }
      })
    } catch(error) {
      console.log('error save data', error)
    }

  }
  const { validationToken } = request.query
  const response = reply.code(200).header("Content-Type", "text/plain; charset=utf-8")
  if(!validationToken) {
    response
  } else {
    console.log('query', request.query)
    response.send(validationToken)
  }
  
  response.send(validationToken)
})

server.listen({ port: PORT, host:  HOST || "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})