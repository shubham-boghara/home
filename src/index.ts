import {ApolloServer, makeExecutableSchema } from "apollo-server"
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/types'
import {$server} from "../config"
import models from './models'
import './models/index'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const apolloServer = new ApolloServer({
    schema,
    context: {models}
})

apolloServer.listen($server).then(({url}) => {
    console.log(`Running on ${url}`)
})