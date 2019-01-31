import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return "Hello";
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
