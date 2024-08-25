// Event Bubbling
let contenedor = document.querySelector(".contenedor");
let btn = document.querySelector(".btn1");

contenedor.addEventListener("click", ()=>{
    alert("CONTENEDOR");
})

btn.addEventListener("click", (e)=>{
    alert("BOTÓN");
})



// Event Capturing
let contenedorRojo = document.querySelector(".red-container");
let contenedorAzul = document.querySelector(".blue-container");
let boton = document.querySelector(".btn2");

contenedorRojo.addEventListener("click", (e)=>{
    alert("Contenedor Rojo");
}, true);

contenedorAzul.addEventListener("click", (e)=>{
    alert("Contenedor Azúl");
}, true);

boton.addEventListener("click", (e)=>{
    alert("Botón");
});



// Stop Propagation
let contenedorNaranja = document.querySelector(".orange-container");
let boton3 = document.querySelector(".btn3");

contenedorNaranja.addEventListener("click", (e)=>{
    alert("Contenedor Naranja");
});

boton3.addEventListener("click", (e)=>{
    alert("Botón");
    e.stopPropagation();
});
