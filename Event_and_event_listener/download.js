let div = document.querySelector("div");
let p = document.querySelector("p");
let count =0;
let id = setInterval(function(){
    if(count<=99){
        count++;
        div.style.width = `${count}%`
        p.textContent = `${count}%`
    }
    if(count==100){
        document.querySelector("h1").textContent = "Congruation downlaoded"
        clearInterval(id)
    }
    console.log(count)
},1000/100);