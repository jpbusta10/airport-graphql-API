import { PassengerRepository } from "../repository/PassengerRepository.js";
import PassengerDTO from '../dtos/PassengerDTO.js'

const passengerRepository = new PassengerRepository();

const PassengerResolver = {
  Query: {
    getAllPassengers: async () => {
      try {
        let passengers = await passengerRepository.getAll();
        console.log(passengers);
        return passengers;
      } catch (error) {
        throw new Error('Unable to get passengers');
      }
    },
  },
  Passenger: {
    passenger_id: (passenger) => passenger.passengerId,
    passenger_name: (passenger) => passenger.passengerName,
    passenger_last_name: (passenger) => passenger.passengerLastName,
    passenger_email: (passenger) => passenger.passengerEmail,
    passenger_country_of_birth: (passenger) => passenger.passengerCountryOfBirth,
  },
};

export default PassengerResolver;