const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Dotenv config
dotenv.config();

// Database connection
mongoose.connect(
  process.env.MONGO_CONNECTION,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

// Express Instance
const app = express();

// Graphql Schema
const typeDefs = gql`
  ${importSchema('./schema/schema.graphql')}
`;

// Graphql Resolvers
const resolvers = require('./schema/resolvers.js');

// Apollo Server Instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Apollo Server Middleware
server.applyMiddleware({ app });

// Express Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Run the API
app.listen(process.env.API_PORT, () => {
  console.log(`API is running on port ${process.env.API_PORT}`);
});
