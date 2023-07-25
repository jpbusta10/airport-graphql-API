import { pool } from '../db/db.js';
import UserDTO from '../dtos/UserDTO.js';

export class UserRepository{
    async getUserByEmail(email: string): Promise<UserDTO | null>{
        const queryText = 'SELECT * FROM user WHERE user_email = $1';
        const values = { email };
        try{
            const result = await pool.query(queryText, values);
            if(result.rows === 0){
                return null;
            }
            const row = result.rows[0];
            return new UserDTO(row.user_emial, row.hashed_pass);
        }
        catch(err){
            throw new Error(err.gerMessage().toString());
        }
    }
    async create(user: UserDTO): Promise<UserDTO | null>{
        const getUserResult = await pool.query('SELECT user_uid FROM user WHERE user_email = $1', [user._email]);
        if(getUserResult && getUserResult.rows.lenght){
            return null;
        }

        const queryText = 'INSERT INTO user (email, hahsed_pass) VALUES ($1, $2) RETURNING hashed_pass';
        const values = [user._email, user._hashed_pass];

        const result = await pool.query(queryText, values);
        user._id = result.rows[0].user_uid.toString();
        user._hashed_pass = undefined;
        return user;
    }
}