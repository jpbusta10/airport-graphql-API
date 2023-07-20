import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  airPortResolver  from './resolvers/AirportResolver'; 

// The GraphQL schema
const typeDefs = `
  type Airport {
    airport_code: String!
    airport_country: String!
    gps_code: String!
  }

  type Query {
    getAllAirports: [Airport!]!
    getAirportByCode(airportCode: String!): Airport
  }
`;

// Create an Apollo Server instance with the type definitions (schema) and resolvers
const server = new ApolloServer({ 
    typeDefs, 
    resolvers: airPortResolver });


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);