let contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
parrafo.innerHTML = "Parrafo";

const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML = "Título Nuevo";

const h2_antiguo = document.querySelector(".h2");

// Reemplazando un h2 por otro
contenedor.replaceChild(h2_nuevo, h2_antiguo);

// Eliminando un hijo (h4)
const h4 = document.querySelector("h4")
contenedor.removeChild(h4);

// Comprobar si tiene hijos o no
let respuesta = contenedor.hasChildNodes();


document.write("¿El div (contenedor) tiene hijos?: ")
if(respuesta == true){
    document.write("<b style=color:green>SI tiene hijos</b>");
}else{
    document.write("<b style=color:red>>NO tiene hijos</b>");
}

