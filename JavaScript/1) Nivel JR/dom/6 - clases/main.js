let titulo = document.querySelector(".titulo");


// Añadir una clase
titulo.classList.add("grande");

// Remover una clase
titulo.classList.remove("grande");

// Devolver el valor de la clase 
let valor = titulo.classList.item(0); 
document.write(`El nombre de la clase es: <b>${valor}</b>`);

// Verificar si una clase existe
valor = titulo.classList.contains("titulo") 
document.write(`<br> ¿La clase titulo existe?: <b>${valor}</b>`)

// Reemplazar una clase por otra
let nuevo_titulo = "titulo-nuevo"
titulo.classList.replace("titulo", nuevo_titulo);
document.write(`<br> El nombre de la clase ahora es: <b>${nuevo_titulo}</b>`)

