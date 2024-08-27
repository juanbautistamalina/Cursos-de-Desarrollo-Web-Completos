function prueba(callback){
    callback("Juan");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);