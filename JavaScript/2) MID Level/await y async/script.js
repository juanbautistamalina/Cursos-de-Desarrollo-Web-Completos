const objeto = {
	nombre: "Juan",
	edad: 22
}

// Función que simula una tarea asincrónica
function obtenerInformacion(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(objeto)
        }, 3000);
    })
}

// Función asincrónica que utiliza 'await'
async function mostrarResultado(){
		resultado = await obtenerInformacion(); // Espera a que la promesa se resuelva
		console.log(resultado);
}


// Llamada a la función asincrónica
mostrarResultado();
