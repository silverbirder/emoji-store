import { GraphQLServer } from 'graphql-yoga'

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`

const resolvers = {
    Query: {
        hello: (_: any) => {
            const returnValue = `Hello World!`
            return returnValue
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

const options = {
    port: 3000,
    endpoint: '/graphql'
  }
server.start(options, () => console.log('Server is running on http://localhost:3000'))