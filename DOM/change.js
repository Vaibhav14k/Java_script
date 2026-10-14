let h1 = document.querySelector("h1");
h1.innerText = "hello deva ";

// question 2 
let li = document.querySelectorAll("li")
console.log(li)
li.forEach(function(val,idx){
    console.log(val.innerHTML=`mongod ${idx}`)
})
// question 3 : 
let img = document.querySelector("img");
console.log(img.src)

// quesiton 4 : 
let a = document.querySelector("a");
a.setAttribute(
    "href",
    "https://sheryians.com"
)

// add title when cursr is hour : 
let div = document.querySelector("div")
div.setAttribute(
    "title",
    "hey"
)

// create one elelmetn : 
let h2 = document.createElement("img");
h2.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanF6GQIUoXHkdMxSEjn1M0-apMwKj6vkYUvIU_LD41A&s"
)
div.append(h2)

// crreate one list and one new li by the js : 
let ul2 = document.querySelector("#ul2");
let lii = document.createElement("li");
lii.textContent="rutu";
ul2.append(lii)
