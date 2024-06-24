// ATRIBUTOS GLOBALES

let titulo = document.querySelector(".titulo");

// Modificando atributos globales
titulo.setAttribute("contentEditable", "true"); // Edición de contenido
titulo.setAttribute("dir", "ltr") // Dirección
titulo.setAttribute("title", "titulo modificado"); // Título

// Mostrando Elemento (por defecto está oculto)
titulo.removeAttribute("hidden");

// Modificando el tabindex
let enlace1 = document.querySelector(".enlace1");
let enlace2 = document.querySelector(".enlace2");
let enlace3 = document.querySelector(".enlace3");

enlace1.setAttribute("tabindex", "1");   
enlace2.setAttribute("tabindex", "2"); 
enlace3.setAttribute("tabindex", "3"); 

