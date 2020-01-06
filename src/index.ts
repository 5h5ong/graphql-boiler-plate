import { GraphQLServer } from "graphql-yoga";
import * as morgan from "morgan";

const typeDefs = `
  type Query {
    hello: String!
  }
`;
const resolvers = {
  Query: {
    hello: () => "hello!"
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });

// logger
server.use(morgan("dev"));

server.start(() => {
  console.log("Server is running on localhost:4000");
});
