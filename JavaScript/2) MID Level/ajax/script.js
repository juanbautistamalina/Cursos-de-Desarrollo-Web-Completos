const peticion = new XMLHttpRequest;

peticion.addEventListener("load", () =>{

    let respuesta;

    if(peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";

    console.log(JSON.parse(respuesta).nombre); // Accediendo a la propiedad tras deserializar
})

peticion.open("GET", "informacion.txt");
peticion.send()


