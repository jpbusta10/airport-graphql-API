import { AirPortRepository } from "../repository/AirPortRepository.js";

const airPortRepository = new AirPortRepository();

const airportResolver = {
    Query: {
        getAllAirports: async () => {
            try {
                return await airPortRepository.getAll();
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
};

export default airportResolver;