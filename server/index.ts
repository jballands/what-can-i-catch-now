import { ApolloServer } from 'apollo-server-micro';
import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });
const handler = server.createHandler({ path: '/api/graphql' });

export default handler;
