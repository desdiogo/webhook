import fastify, {FastifyRequest} from 'fastify'
import * as dotenv from 'dotenv'
dotenv.config()

const server = fastify()

type WebHookRequest = FastifyRequest<{
  Querystring: { validationToken?: string }
}>

server.post('/webhook', async (request: WebHookRequest, reply) => {
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

server.listen({ port: process.env.PORT }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})