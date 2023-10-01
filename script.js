const API_URL = "https://catfact.ninja/fact?max_length=140";

fetch(API_URL, {
    headers: {
        'Content-Type': 'application/json',
}
})
.then(response => response.json())
.then(data => {
   let button = document.getElementById("btn"); 
   let container = document.getElementById("container");

   button.addEventListener("click", function mostrarDato() {
    container.innerHTML = `<p>${data.fact}</p>`
   })
   
}) 
.catch(error=> console.log(error));