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
