class TripDTO{
    _tripId: string;
    _airPort1Id: string;
    _airPort2Id: string;
    _tripDate: string;

    constructor(tripId:string, airport1Id:string, airport2Id:string, tripDate:string){
        this._tripId = tripId;
        this._airPort1Id = airport1Id;
        this._airPort2Id = airport2Id;
        this._tripDate = tripDate;
    }

    get tripId():string{
        return this._tripId;
    }
    get airPort1Id():string{
        return this._airPort1Id;
    }
    get airPort2Id():string{
        return this._airPort2Id;
    }
    get tripDate():string{
        return this._tripDate;
    }
    set tripId(tripId:string){
        this._tripId = tripId;
    }

    set airport1Id(airPort1Id:string){
        this._airPort1Id = airPort1Id;
    }
    set airport2Id(airPort2Id:string){
        this._airPort2Id = airPort2Id;
    }
    set tripDate(tripDate:string){
        this._tripDate = tripDate;
    }
    
}
export default TripDTO;