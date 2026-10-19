let pr = new Promise(function(res,rej){
    let no = Math.floor(Math.random()*10);
    console.log(no);
    setTimeout(() => {
        if(no>5) res(no)
        else rej(no)
    }, 2000);
})

pr
.then(function(val){ console.log("resolved the promise : " + val)})
.catch(function(val){console.log("rejected teh promise "+val)})

