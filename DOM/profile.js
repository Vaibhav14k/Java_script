let img = document.createElement("img");
let input= document.querySelector("input");
let name = input.value;
let h1 =document.querySelector("h1");
h1.textContent = `hello ${name}`;
img.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUeQMEjIo2PlA-me33exSri1ASNCdPMIG2GwwgFPcKw&s=10"
)
img.classList.add("placeholder")
document.querySelector("div").prepend(img)
