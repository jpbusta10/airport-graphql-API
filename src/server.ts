import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import airportResolver from './resolvers/AirportResolver.js';
import passengerResolver from './resolvers/PassengerResolver.js';
import _ from 'lodash';

const typeDefs = `
  type Airport {
    airport_id: ID!
    airport_code: String
    airport_country: String
    gps_code: String
  }
  
  type Passenger {
    passenger_id: ID
    passenger_name: String
    passenger_last_name: String
    passenger_email: String
    passenger_country_of_birth: String
  }
  
  type Query {
    getAllAirports: [Airport!]!
    getAirportByCode(airportCode: String!): Airport
    getAllPassengers: [Passenger!]
    getPassengetByFullName(name: String!, last_name: String!): Passenger
    createPassanger(name: String!, last_name: String!, email: String!, country_of_birth: String!): String
  }
`;


const resolvers = _.merge(airportResolver, passengerResolver);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at: ${url}`);
