const { gql } = require("apollo-server-cloud-functions");

const typeDefs = gql`
  type Query {
    GetShows(date: String): [Show]
  }

  type Show {
    id: String
    galleryName: String
    time: String
    date: String
  }

  type Response {
    success: String
    error: String
  }
`;

module.exports = typeDefs;
