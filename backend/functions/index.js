const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const { ApolloServer } = require("apollo-server-cloud-functions");

// Construct a schema, using GraphQL schema language
const typeDefs = require("./schema");

// Provide resolver functions for your schema fields
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const functions = require("firebase-functions");
const api = functions.https.onRequest(server.createHandler());
module.exports = { api };
