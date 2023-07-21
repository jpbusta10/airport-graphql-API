import { AirPortRepository } from "../repository/AirPortRepository.js";
import AirportDTO from '../dtos/AirportDTO.js';
const airPortRepository = new AirPortRepository();

const airportResolver = {
    Query: {
      getAllAirports: async () => {
        try {
          let airports = new Array<AirportDTO>();
          airports = await airPortRepository.getAll();
          return airports;
        } catch (error) {
          throw new Error('Unable to get airports');
        }
      },
      getAirportByCode: async (_, { airportCode }) => {
        try {
          return await airPortRepository.getByAirportCode(airportCode);
        } catch (error) {
          throw new Error('Unable to get airport by code');
        }
      },
    },
    Airport: {
      airport_id: (airport) => airport.airportId, 
      airport_code: (airport) => airport.airportCode,
      airport_country: (airport) => airport.airPortCountry,
      gps_code: (airport) => airport.gpsCode,
    },
  };

export default airportResolver;
