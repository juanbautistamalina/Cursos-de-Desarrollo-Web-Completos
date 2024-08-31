const peticion = new XMLHttpRequest;

peticion.addEventListener("load", () =>{

    let respuesta;

    if(peticion.status == 200 || peticion.status == 201) respuesta = peticion.response;
    else respuesta = "Lo siento, no se ha encontrado el recurso";

    console.log(JSON.parse(respuesta).nombre); 
})

peticion.open("POST", "https://reqres.in/");
peticion.send(JSON.stringify({
    "name": "morpheus",
    "job": "leader"
}))


