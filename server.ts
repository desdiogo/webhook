import fastify from 'fastify'
import * as dotenv from 'dotenv'
dotenv.config()

const server = fastify()

server.post('/webhook', async (request, reply) => {
  console.log(request.body)
  reply.code(200).header("Content-Type", "text/plain; charset=utf-8")
})

server.listen({ port: process.env.PORT, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})