class AirportDTO{
    _airportCode: string;
    _airPortCountry: string;
    _gpsCode: string;

    constructor(airportCode:string, airportCountry:string, gpsCode:string){
        this._airportCode = airportCode;
        this._airPortCountry = airportCountry;
        this._gpsCode = gpsCode;
    }

    get airportCode(): string{
        return this._airportCode;
    }
    get airportCountry():string{
        return this._airPortCountry;
    }
    get gpsCode():string{
        return this._gpsCode;
    }

    set airportCode(airportCode: string){
        this._airportCode = airportCode;
    }
    set airportCountry(airportCountry: string){
        this._airPortCountry = airportCountry;
    }
    set gpsCode(gpsCode:string){
        this._gpsCode;
    }

}
export default AirportDTO;