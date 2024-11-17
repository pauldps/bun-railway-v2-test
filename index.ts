import { createSchema, createYoga } from "graphql-yoga"

export const yoga = createYoga({
  schema: createSchema({
    typeDefs: `
      type User {
        id: ID!
        name: String
      }

      type Query {
        getUsers: [User!]!
      }
    `,
    resolvers: {
      Query: { getUsers: () => ([{ id: 1, name: 'John Doe' }]) }
    }
  })
})

export const server = Bun.serve({
  fetch: async (request) => await yoga(request)
})

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`
  )}`
)
