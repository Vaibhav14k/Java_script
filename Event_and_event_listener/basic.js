// let pointx = document.createElement("p")
// let pointy = document.createElement("p")
// let div = document.querySelector("div")
// // document.addEventListener('mousemove',function(e){
// //     pointx.textContent = `X : ${e.clientX}`
// //     pointy.textContent = `Y : ${e.clientY}`
// //     div.append(pointx)
// //     div.append(pointy)
// // })
// // input event : 

// let inp = document.querySelector("input");
// let showinput =document.createElement("h1");
// inp.addEventListener("input",function(e){
//     // console.log(e.data)
//     if(e.data !== null){
//         console.log(e.data)
//     }
//     showinput.textContent = e.target.value 
//     div.append(showinput)
// })

// // changne event : 
// let h1 = document.querySelector("h1");
// let select = document.querySelector("select");
// select.addEventListener("change",function(e){
//     h1.textContent = `choice device : ${e.target.value}`
// })
// // hide the parg by button : 
// let button = document.querySelector("button");
// let p = document.querySelector("p");
// button.addEventListener("click",function(e){
//     p.classList.add("pp");
// })

let h1  = document.querySelector("h1");

window.addEventListener("keydown",function(e){
    if(e.key === " "){
         h1.textContent = "space"
    }else{
            h1.textContent =e.key;
    }
    console.log(e)
})