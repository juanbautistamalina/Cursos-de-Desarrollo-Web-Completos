// SELECCIÓN DE ELEMENTOS

// Selecciono el elemento con ID párrafo.
let parrafo = document.getElementById("parrafo");

// Selecciono todos los elementos p (Párrafos)
document.getElementsByTagName("p");

document.write("<hr><br>");

document.write("Párrafo: "+ parrafo + "<br><br>")


// Selecciono el primer elemento que coincida con el grupo especificado de selectores
let div = document.querySelector(".caja"); // .class o #id
document.write("Div: "+ div + "<br><br>");


// Selecciono a todos los elementos que coincidan con el grupo especificado de selectores
let box = document.querySelectorAll(".box");
document.write(box);