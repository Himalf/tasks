import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { ApolloServer } from "@apollo/server";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./resolvers/taskResolver.js";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
dotenv.config();
const app = express();
const PORT = 3000;
connectDB();

const server = await new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();
app.use("/graphql", cors(), express.json(), expressMiddleware(server));
app.listen(PORT, () => {
  console.log(`server running on : ${PORT}`);
});
