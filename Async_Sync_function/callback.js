// function abcd(func){
//     setTimeout(func, 1000);
// }
// function efg(){
//     console.log("heyyy");
// }
// abcd(efg)

// efg is an callback function : 


function profiledo(username,cb){
    console.log("profile do ....");
    setTimeout(() => {
        cb({id:1,username, age:26 , email : "vaibhav@gmail.com"}); 
    }, 1000);
}


function postdo(id,cb){
    console.log("post fecthign ....");
    setTimeout(() => {
        cb({id:1,post:["hey","hey2","hey3"]});
    }, 2000);
}
function savedpsot(id,cb){
    console.log("saved posted fetch ...");
    setTimeout(() => {
        cb({id:1 , savedpostt:[1,2,3,4]})
    }, 2000);
}

profiledo("harsh",function(data){
    console.log(data);
    postdo(data.id,function(data){
        console.log(data.id,data.post);
        savedpsot(data.id,function(data){
            console.log(data)
        })
    })
})







