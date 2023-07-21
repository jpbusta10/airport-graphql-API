class PassengerDTO {
    private _id: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _countryOfBirth: string;

    constructor(id:string, firstName: string, lastName: string, email:string, countryOfBirth: string){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._countryOfBirth = countryOfBirth;
    }

    get uuid(): string | undefined {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }
    
    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this._email;
    }

    get countryOfBirth(): string {
        return this._countryOfBirth
    }
    set firstName(firstName: string){
        this._firstName = firstName;
    }
    set lastName(lastName: string){
        this._lastName = lastName;
    }
    set email(email: string){
        this._email = email;
    }
    set countryOfBirth(countryOfBirth: string){
        this._countryOfBirth = countryOfBirth;
    }
    set id(id: string){
        this._id = id;
    }

}

export default PassengerDTO;