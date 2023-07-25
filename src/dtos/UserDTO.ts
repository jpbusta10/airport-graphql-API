class UserDTO{
    _id: string;
    _email: string;
    _hashed_pass: string;

    constructor(email: string, hashed_pass: string){
        this._email = email;
        this._hashed_pass = hashed_pass;
    }

    get id(): string{
        return this._id;
    }
    get email():string{
        return this._email;
    }
    get hashed_pass(): string{
        return this._hashed_pass;
    }
    set id(id: string){
        this._id = id;  
    }
    set email(email:string){
        this._email = email;
    }
    set hashed_pass(hashed_pass: string){
        this._hashed_pass = this._hashed_pass;
    }
}
export default UserDTO;