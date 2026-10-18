console.log(this)

function abcd(){
    console.log(this)
}
abcd()

let obj= {
    name : "vaibhav",
    sayname : ()=>{
        console.log(this)
    }
}
obj.sayname()

// call : 
