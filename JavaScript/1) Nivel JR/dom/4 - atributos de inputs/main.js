let input = document.querySelector(".input-texto");
let input2 = document.querySelector(".input-2")
let input3 = document.querySelector(".input-3")

// Nombre de la Clase
document.write("<br><b> Ejemplo className </b>: "+input.className); 

// Modificando Placeholder
input.placeholder = "Texto de ejemplo..."

// Modificando Value
input2.value = 90; 

// Modificando Type
input3.type = "range";

// Modificando minLength
input.minLength = 4; // Forma 1
// input.setAttribute("minlength", "3") // Forma 2

// Modificando a campo Requerido
input.required = "true";
