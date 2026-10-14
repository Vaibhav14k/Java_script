// let user = {
// name: "Amit",
// address: {
// city: "Delhi",
// pincode: 110001
// }
// }
// // let {name} = user;
// // let {address = {city}} = user;
// // console.log(address.city);

// for(let key in user){
//     console.log(key,user[key])
// }

// // object key : 
// let student = {
//     name : "vaibhav",
//     age : 12,
//     email : "vaibhavkangane1424@gmail.com"
// }
// console.log(Object.keys(student))

// // deep copy concept : 
// let obj1 = {
//     name: "viabhav",
//     age : 12,
//     add : {
//         city : "pune"
//     }
// }
// let obj2 = {...obj1};
// obj2.add.city = "ambad";
// console.log(obj2.add.city)
// console.log(obj1.add.city)

// let obj3  = {
//     name: "viabhav",
//     age : 12,
//     add : {
//         city : "pune"
//     }
// }
// let obj4 = JSON.parse( JSON.stringify(obj3) );
// obj4.add.city  = "jalan";
// console.log(obj4.add.city)
// console.log(obj3.add.city)

let user = {
    name : "vaibhav",
    age : 12
}
Object.entries(user).forEach(function(val){
    console.log(val[0] + ":" + val[1]);
})