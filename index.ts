import { Elysia } from 'elysia'

new Elysia()
  .get('/', () => { return { status: 'OK' } })
  .listen(process.env['PORT'] ?? 3000, (server) => {
    console.log(`Server is running on port ${server.port}`)
  })
