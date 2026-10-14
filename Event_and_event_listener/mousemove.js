let div = document.querySelector("div");

window.addEventListener("mousemove",function(e){
    // console.log(e)
    // console.log(e.clientX+" " + e.clientY)
    div.style.top = e.clientY + "px";
    div.style.left = e.clientX +"px";
    // console.log(div)
})
let ul = document.querySelector("ul");
ul.addEventListener("click",function(e){
    // console.log(e.target)
    e.target.classList
    
})