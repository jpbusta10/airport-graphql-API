import { pool } from "../db/db.js";
import  PassengerDTO from "../dtos/PassengerDTO.js";

export class PassengerRepository{
    async getAll(): Promise<PassengerDTO[]>{
        const queryText = 'SELECT * FROM passenger ORDER BY passenger_name';

        try{
            const result = await pool.query(queryText);
            let passengers = result.rows.map((row) => new PassengerDTO(row.passenger_uid, 
                row.passenger_name, row.passenger_last_name, row.email, row.country_of_birth));
                return passengers;

        }
        catch(err){
            throw new Error('unableto get airports');
        }
    }

}





