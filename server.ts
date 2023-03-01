import fastify from 'fastify'

const server = fastify()

server.get('/webhook', async (request, reply) => {
  console.log(request.body)
  reply.code(200).header("Content-Type", "text/plain; charset=utf-8")
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})