// console.log(this)

// function abcd(){
//     console.log(this)
// }
// abcd()

// let obj= {
//     name : "vaibhav",
//     sayname : ()=>{
//         console.log(this)
//     }
// }
// obj.sayname()

// call : 
// let obj = {
//     name :"vaibhav"
// }
// let obj2 ={
//     name  : "deva"
// }
// function abcd(a,b,c){
//     console.log(this,a,b,c)
// }
// abcd.call(obj,1,2,3);
// abcd.call(obj2,1,2,3);


// project : 

let form = document.querySelector("form")
console.log(form)
const user =  {
    users :[],
    init : function(){
        form.addEventListener("submit",this.submitform.blind(this));
    },
    submitform : function(e){
        e.preventDefault();
        console.log(this)
    },
    adduser : function(){},
    removeruser : function() {}
}