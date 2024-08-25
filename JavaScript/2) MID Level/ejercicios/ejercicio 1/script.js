/* Después de aprobar, Cofla se compra una mejor computadora para poder programar mejor y hacer todo de una forma más óptima pero
   necesita una resolución óptima para poder trabajarla. 
   - Debe ser al menos full hd 
   - Cuando la esté por comprar, preguntarle si está seguro de eso.*/

let ancho = window.screen.availWidth;
let alto = window.screen.availHeight;

let comprar = confirm(`Resolución: ancho: ${ancho}, alto: ${alto}`);
if(comprar == true){
    alert("Compra realizada correctamente");
}else{
    alert("Compra cancelada correctamente");
}