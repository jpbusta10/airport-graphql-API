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
            throw new Error('unableto get passengers');
        }
    }
    async getPassengerByFullName(first_name: string, last_name: string): Promise<PassengerDTO | null>{
        const queryText = 'SELECT * FROM passenger WHERE passenger_name = $1 AND passenger_last_name = $2';
        const values = [first_name, last_name];
        try{
            const result = await pool.query(queryText, values);
            if(result.rows === 0){
                return null;
            }
            const row = result.rows[0];
            return new PassengerDTO(row.passenger_id, row.passenger_name, row.passenger_last_name, row.email, row.passenger_country_of_birth);
        }
        catch(err){
            throw new Error('unable to get passenger');
        }
    }

}





