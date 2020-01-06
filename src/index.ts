import { GraphQLServer } from "graphql-yoga";
import * as morgan from "morgan";
import schema from "./schema";

const server = new GraphQLServer({ schema });

// logger
server.use(morgan("dev"));

server.start(() => {
  console.log("Server is running on localhost:4000");
});
