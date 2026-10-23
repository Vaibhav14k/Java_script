// async function getPost() {
//   try {
//     console.log("Fetching data...");

//     const response = await fetch(
//        "https://jsonplaceholder.typicode.com/users"
//     );
//     if(response.ok){
//         console.log(response.status)
//     }
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const data = await response.json();
//     // console.log(data);
//     data.forEach((element) => {
//         console.log(element)
//         let h1 = document.createElement("li");
//         h1.textContent =  ` Id : ${element.id}  Name :  ${element.name} Age   , Username : ${element.username} `;
//         h1.style.fontSize = "50px" 
//         if(element.id % 2 == 0){
//             h1.style.color = "red"
//         }
//         document.querySelector("ul").append(h1)
//     });
//   } catch (error) {
//     console.log("Something went wrong:", error.message);
//   }
// }
// getPost()

async function abcd() {
    try {
        console.log("fecthhh... ")
        let responce = await fetch("https://jsonplaceholder.typicode.com/users");
        if (responce.ok) {
            console.log(responce.status);
        }
        if (!responce.ok) {
            console.log(responce.status);
        }
        let data = await responce.json();
        console.log(data)
        const div = document.createElement("div");

        // Apply CSS styles
        div.style.border = "2px solid black";
        div.style.Width = "100px";
        div.style.Height = "100px";
        // Create paragraph elements
        data.forEach((element) => {

        const p1 = document.createElement("p");
        p1.textContent = element.name;

        const p2 = document.createElement("p");
        p2.textContent = element.email;

        const p3 = document.createElement("p");
        p3.textContent = element.phone;

        // Append paragraphs inside the div
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        // Append the div to the HTML body container
        document.getElementById("container").appendChild(div);
        });
    }catch(err){
        console.log("err"+err.message)
    }
}
abcd()
