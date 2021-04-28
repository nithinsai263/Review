const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String!
    findallusers: [userstructure]
    finduser(userid: String!): userstructure
    findallreviewcards: [reviewcardstructure]
    findreviewcard(reviewid: String!): reviewcardstructure
  }
  type reviewcardstructure {
    title: String
    Description: String
    Image: String
    Tag: String
    userid: String
    reviews: [reviewstructure]
  }
  type reviewstructure {
    userid: String
    username: String
    stars: String
    review: String
    photos: [String]
  }

  type userstructure {
    name: String
    email: String
    password: String
    tokenVersion: String
    gender: String
    phonenumber: String
    otherreviews: [userreviewstructure]
    ownreviews: [userreviewstructure]
  }
  type userreviewstructure {
    reviewid: String
  }
  type Mutation {
    createUser(
      email: String!
      name: String!
      gender: String!
      phonenumber: String!
      password: String!
    ): Boolean!

    createreviewcard(
      title: String!
      description: String!
      image: String!
      tag: String!
      userid: String!
    ): Boolean!

    addreview(
      userid: String!
      username: String!
      stars: String!
      review: String
      photos: [String]
      reviewid: String!
    ): Boolean!
  }
`;

module.exports = { typeDefs };
