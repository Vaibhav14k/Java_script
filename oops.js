function createpenchil(name,price,color){
    this.name = name,
    this.price = price,
    this.color = color
    this.write = function(text){
        let h1= document.createElement("h1");
        h1.textContent = text;
        h1.style.color= color;
        document.querySelector("body").append(h1)
    }
}
createpenchil.prototype.company = "xyz.company"
let pencil1 = new createpenchil("natraj",10,"black")
let pencil2 = new createpenchil("natraj",10,"red")
console.dir(pencil1)