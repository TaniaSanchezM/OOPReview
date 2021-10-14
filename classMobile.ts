export class Mobile{
    private name:string
    private model:string 
    private trademark:string
    private sdSize:number
    private color:string
    private is5G:boolean
    private cameraNumber:number
    private price:number

    constructor(name:string, model:string, trademark:string, sdSize:number, 
                color:string, is5G:boolean, cameraNumber:number, price:number){
                    this.name = name;
                    this.model = model;
                    this.trademark = trademark;
                    this.sdSize = sdSize;
                    this.color = color;
                    this.is5G = is5G;
                    this.cameraNumber = cameraNumber;
                    this.price = price
        }

// métodos públicos (getters)
public getName():string{
    return this.name
}
public getModel():string{
    return this.model
}
public getTrademark():string{
    return this.trademark
}
public getSdSize():number{
    return this.sdSize
}
public getColor():string{
    return this.color
}
public getIs5G():boolean{
    return this.is5G
}
public getCameraNumber():number{
    return this.cameraNumber
}
public getPrice():number{
    return this.price
}

// Métodos públicos (setters)
public setName(name:string):void{
    this.name = name
}
public setModel(model:string):void{
    this.model = model
}
public setTrademark(trademarkt:string):void{
    this.trademark = trademarkt
}
public setSdSize(sdSize:number):void{
    this.sdSize = sdSize
}
public setColor(color:string):void{
    this.color = color
}
public setIs5G(is5G:boolean):void{
    this.is5G = is5G
}
public setCameraNumber(cameraNumber:number):void{
    this.cameraNumber = cameraNumber
}
public setPrice(price:number):void{
    this.price = price 
}
// Otros métodos públicos
public toString():string{
    return "The characteristics of the mobile " + this.name + " are:\n" + "*Name: " + this.name + "\n" +
    "*Model: " + this.model + "\n" + "*Trademark: " + this.trademark + "\n" + "SD Size(GB): " + 
    this.sdSize + "\n" + "*Color: " + this.color + "\n" + "*Is 5G? :" + this.is5G + "\n" + 
    "*Number of Cameras: " + this.cameraNumber 
}
}