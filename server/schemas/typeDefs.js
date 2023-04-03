// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  # declaring type book with it values
  type Book {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }
  `;