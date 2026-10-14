let file = document.getElementById("file")
let mainfile = document.getElementById("mainfile")

file.addEventListener("click",function(){
    mainfile.click();
    // console.log(file);
    // console.log(mainfile);
})
mainfile.addEventListener("change",function(e){
    file.textContent = e.target.files[0].name
    console.log(e.target.files[0].name)
})