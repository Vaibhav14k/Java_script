// let arr  = [1,2,3,4];
// arr.forEach(function(val,idx){
//     val = val*val;
//     console.log(val,idx);
// })

// let arr2 = [10,20,30];
// let newarr = arr2.map(function(val){
//     return val * 2;
// })
// console.log(newarr  )

// let arr3 = [10,20,30];
// let filterarr = arr3.filter(function(val){
//     if(val>20) return true;
// })
// console.log(filterarr)

// let fruits = ["a","b"," c"];
// console.log(fruits[1]);
// fruits.push("mongos");
// console.log(fruits);


// let number = [10,20,30,40,50];
// let newnumber = number.reduce((sum,val)=>{
//     return sum + val;
// },0)
// console.log(newnumber)\
// const arr = [10, 20, 30, 40];

// console.log(arr.slice(1,1)); 
// console.log(arr);             // [10, 20, 30, 40]

// console.log(arr.splice(1,1)); // [20, 30]
// console.log(arr);              // [10, 40]
// const total = [1, 2, 3].reduce((sum, n) => sum + n, 0);
// console.log(total)
const products = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 10000 }
];
let x = products.filter(function(product){
    return product.price>5000;
})
console.log(x)