
// async / await ; 
let pr = 
new Promise(function(res,rej){
    let no = Math.floor(Math.random()*10);
    console.log(no);
    setTimeout(() => {
        if(no>5) res(no)
        else rej(no)
    }, 2000);
})

// asnc & await make the easier to wrtite ht promise by the async and await : 
console.log("start") ;
async function abcd() {
    try{
        let result = await pr;
        console.log("succes : " + result)
    }catch(err){
        console.log("err : "  + err)
    }
}
abcd()
console.log("end")
