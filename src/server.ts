import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import airportResolver from './resolvers/AirportResolver.js';


const typeDefs = `
  type Airport {
    airport_id: ID!
    airport_code: String
    airport_country: String
    gps_code: String
  }

  type Query {
    getAllAirports: [Airport!]!
    getAirportByCode(airportCode: String!): Airport
  }
`;


const server = new ApolloServer({ 
    typeDefs, 
    resolvers: airportResolver });


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);