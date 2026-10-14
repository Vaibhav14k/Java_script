let h1 = document.querySelector("h1");
h1.addEventListener("mouseenter",function(e){
    h1.style.backgroundColor = "yellow"
})
h1.addEventListener("mouseleave",function(e){
    h1.style.backgroundColor = "red";
})