import { pool } from "../db/db";
import AirportDTO from "../dtos/AirportDTO";

export class AirPortRepository{
    async getAll(): Promise<AirportDTO[]> {
        const queryText = 'SELECT * FROM airport ORDER BY airport_country';

        try{
            const result = await pool.query(queryText);
            return result.rows.map((row)=>new AirportDTO(row.airport_code, row.airport_country, row.gps_code))
        }
        catch(err){
            throw new Error('Unable to get airports');
        }
    }
    async getByAirportCode(airportCode: string): Promise<AirportDTO | null> {
        const queryText = 'SELECT * FROM airport WHERE airport_code = $1';
        const values = [airportCode];
    
        try {
          const result = await pool.query(queryText, values);
          if (result.rows.length === 0) {
            return null;
          }
          const row = result.rows[0];
          return new AirportDTO(row.airport_code, row.airport_country, row.gps_code);
        } catch (err) {
          throw new Error('Unable to get airport by code');
        }
      }
}