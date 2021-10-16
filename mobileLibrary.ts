import { Mobile } from './classMobile';
export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles: Mobile[]
    private totalPrice: number

    constructor(name:string, location:string, mobiles:Mobile[]){
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculator();
    }

// métodos públicos (getters)
public getName():string{
    return this.name
}
public getLocation():string{
    return this.location
}
public getMobiles():Mobile[]{
    return this.mobiles
}
// Métodos públicos (setters)
public setName(name:string):void{
    this.name = name
}
public setLocation(location:string):void{
    this.location = location
}
public setMobiles(mobiles:Mobile[]):void{
    this.mobiles = mobiles
}
// Otros métodos 
private totalPriceCalculator(){
    let sumaPrecio:number = 0
    for (let i = 0; i < this.mobiles.length; i++){
        sumaPrecio += this.mobiles[i].getPrice();
    }
    return sumaPrecio 
} 
public printLibrary():void{
    console.log("This is all my mobiles:")
    for (let movil in this.mobiles){
        console.log(this.mobiles[movil].toString())
    }
    console.log("**Price overall: " + this.totalPriceCalculator())
}
}