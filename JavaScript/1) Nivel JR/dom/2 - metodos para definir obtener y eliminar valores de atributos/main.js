// Métodos para Definir, Obtener y Eliminar valores de Atriutos


let nombre = document.querySelector(".nombre");

// Modificando Atributo (lo paso de text a color)
nombre.setAttribute("type", "color"); 

// Obteniendo el valor del Atributo
let valor = nombre.getAttribute("type"); 
document.write("<b>Valor actual del Atributo 'type'</b>: "+ valor)

// Eliminando el Atributo
// nombre.removeAttribute("type"); 
