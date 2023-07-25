import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export function generateToken(payload: any): string{
    return jwt.sign(payload, secretKey, {expiresIn: '1h'});
}

export function veryfyToken(token: string):any{
    try{
        return jwt.verify(token, secretKey);
    }catch(error){
        throw new Error('invalid token');
    }
}