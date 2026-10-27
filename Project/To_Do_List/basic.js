const inputbox = document.getElementById("input-box");
const list = document.getElementById("list");
console.log(inputbox);
console.log(list)

function addtask(){
    if(inputbox.value == ''){
        alert("enter somthing ")
    }else{
        let li = document.createElement("li");
        li.textContent = inputbox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = " ";
    savedata()
}

list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false)
function savedata(){
    localStorage.setItem("data",list.innerHTML);
}
function showtask(){
    list.innerHTML = localStorage.getItem("data")
}
showtask()