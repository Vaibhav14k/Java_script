// to build the discount calculator : 
function discountcal(discount){
    return function(price){
        return price - price  * (discount /100);
    }
}
let discounter = discountcal(10);
console.log(discounter(200))


function countr(val){
    let count = 0 ;
    return function(){
        count++;
        return count;
    }
}   
let c = countr();
console.log(c());
console.log(c());
console.log(c());

let  d = countr();
console.log(d()) ; 