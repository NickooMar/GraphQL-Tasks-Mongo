require('dotenv').config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");

//DATABASE
const { connectDB } = require('./db')

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");



const app = express();
connectDB();


app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

module.exports = app;

async function startServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });

  app.use("*", (req, res) => {
    res.status(404).send("Not Found");
  });

  app.listen(process.env.PORT, () => {
    console.log(`Server Running on port ${PORT}`);
  });
}

startServer();
