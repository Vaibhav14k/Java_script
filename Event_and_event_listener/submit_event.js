let form = document.querySelector("form")
let input = document.querySelectorAll("input")
// input.forEach(function(val){
//     console.log(val.value)
// })


let body = document.querySelector("body")

let card = document.querySelector("#card");
let div = document.createElement("div");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let card = document.createElement("div");
    card.classList.add("card");
    let profile = document.createElement("div");
    profile.classList.add("profile");
    let img = document.createElement("img");
    img.setAttribute(
        "src",
        input[0].value
    )
    let h3 = document.createElement("h3");
    h3.textContent = input[1].value;
    let h5 = document.createElement("h5")
    h5.textContent = input[2].value
    let p = document.createElement("p")
    p.textContent= input[3].value
    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p)
    body.appendChild(card);

    input.forEach(function(val){
        if(val.type !== "submit"){
        val.value = "";
        }
    })
})
