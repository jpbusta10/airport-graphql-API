import { PassengerRepository } from "../repository/PassengerRepository.js";
import PassengerDTO from '../dtos/PassengerDTO.js'

const passengerRepository = new PassengerRepository();

const PassengerResolver = {
  Query: {
    getAllPassengers: async () => {
      try {
        let passengers = await passengerRepository.getAll();
        return passengers;
      } catch (error) {
        throw new Error('Unable to get passengers');
      }
    },
  },
  Passenger: {
    passenger_id: (passenger) => passenger._id,
    passenger_name: (passenger) => passenger._firstName,
    passenger_last_name: (passenger) => passenger._lastName,
    passenger_email: (passenger) => passenger._email, 
    passenger_country_of_birth: (passenger) => passenger._countryOfBirth,
  },
};

export default PassengerResolver;