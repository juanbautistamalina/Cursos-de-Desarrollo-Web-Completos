let url = "https://youtube.com";

// window.open(): Abre una ventana especificada
const ventana = window.open(url);

// winwos.close(): Cierra la ventana
ventana.close();

// window.close: Comprueba si la ventana está cerrada o no
console.log(ventana.closed)

// confirm(): Ventana con texto y opciones Aceptar y Cancelar
let confirmar = confirm("¿Está seguro de que desea salir del sitio web?");
console.log(confirmar)
