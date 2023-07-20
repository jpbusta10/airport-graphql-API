class PassengerDTO {
    private _uuid: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _countryOfBirth: string;

    constructor(firstName: string, lastName: string, email:string, countryOfBirth: string, uuid?: string){
        this._uuid = uuid;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._countryOfBirth = countryOfBirth;
    }

    get uuid(): string | undefined {
        return this._uuid;
    }

    get firstName(): string {
        return this._firstName;
    }
    
    get lastName(): string {
        return this._lastName;
    }

    get email(): string {
        return this.email;
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

}