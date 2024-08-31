// Ejemplo 1: 
peticion = fetch('https://jsonplaceholder.typicode.com/todos/1')

peticion
      .then(respuesta => respuesta.json()) // Obtener la respuesta  y convertir a json
      .then(json => console.log(json)) // Mostrar respuesta



// Ejemplo 2:
peticion = fetch("https://pokeapi.co/api/v2/pokemon/ditto");
peticion
    .then(res => res.text()) // Obtener la respuesta y convertir a texto
    .then(res => console.log(JSON.parse(res))) // Convertirla a json y mostrarla