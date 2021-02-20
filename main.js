function ClassicGuitar(manufactureYear, brand, price){
this.manufactureYear =  manufactureYear;
this.brand = brand;
this.price = price;
this.numberOfString = 6;
this.used = false;
this.play = function(){
    if(!this.used){
        this.price = price - (price * .10);
    }
    return "🎶🎶🎶";    
};
this.getManufactureYear = function(){
    return this.manufactureYear;
}  
this.getBrand = function(){
    return this.brand;
}
this.getPrice = function(){
    return this.price;
}
this.setPrice = function(newPrice){
    this.price = newPrice;
}
}
ClassicGuitar.prototype.detectSound = function(sound){
    if(sound === "🎸"){
        return "ElectricGuitar";
    }else if(sound === "🔊"){
        return "BassGuitar";
    }else {
        return "not a Bass or Electronic guitar";
    }
}
function ElectricGuitar(manufactureYear, brand, price, longNeck){
    ClassicGuitar.call(this, manufactureYear, brand, price);
    this.used = false;  
    this.longNeck = longNeck;
    this.used = false;  
    this.play = function(){
        if(!this.used){
            this.used = true;
            this.price = price - (price * .10);
        }
        return "🎸🎸🎸";    
    };
}
ElectricGuitar.prototype = Object.create(ClassicGuitar.prototype);
Object.defineProperty(ElectricGuitar.prototype, 'constructor', {
    value: ElectricGuitar,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true });
    function BassGuitar(manufactureYear, brand, price){
        ClassicGuitar.call(this, manufactureYear, brand, price);
        this.used = false;
        this.numberOfString = 4;
        this.play = function(){
            if(!this.used){
                this.used = true;
                this.price = price - (price * .10);
            }
            return "🔊🔊🔊";    
        };
        this.playSolo = function(){
            return "💥🤘🎵📢💢🕺";
        }
    }
    BassGuitar.prototype = Object.create(ClassicGuitar.prototype);
    Object.defineProperty(BassGuitar.prototype, 'constructor', {
        value: BassGuitar,
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true });
    