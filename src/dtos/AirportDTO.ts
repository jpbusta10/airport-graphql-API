class AirportDTO{
    _airportId: string
    _airportCode: string;
    _airPortCountry: string;
    _gpsCode: string;

    constructor(airportId:string, airportCode:string, airportCountry:string, gpsCode:string){
        this._airportId = airportId
        this._airportCode = airportCode;
        this._airPortCountry = airportCountry;
        this._gpsCode = gpsCode;
    }
    get airportId():string{
        return this._airportId;
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

    set airportId(aiprtId:string){
        this._airportId = aiprtId;
    }
    set airportCode(airportCode: string){
        this._airportCode = airportCode;
    }
    set airportCountry(airportCountry: string){
        this._airPortCountry = airportCountry;
    }
    set gpsCode(gpsCode:string){
        this._gpsCode = gpsCode;
    }

}
export default AirportDTO;