// Función que retorna una promesa
function verificarEdad(edad) {
    return new Promise((resolver, rechazar) => {
        if (edad >= 18) {
            resolver("Eres mayor de edad.");
        } else {
            rechazar("No eres mayor de edad.");
        }
    });
}

// Usar la promesa
verificarEdad(20)
    .then(mensaje => {
        console.log(mensaje); // Se ejecuta si la promesa se resuelve
    })
    .catch(error => {
        console.log(error); // Se ejecuta si la promesa es rechazada
    });
