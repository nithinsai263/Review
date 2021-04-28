const { ApolloServer, gql } = require("apollo-server");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const mongoose = require("mongoose");

(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await mongoose
    .connect("mongodb://localhost/review")
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err) => console.error("Could not connect to mongodb", err));

  server.listen().then(({ url }) => console.log(`server started at ${url}`));
})();
