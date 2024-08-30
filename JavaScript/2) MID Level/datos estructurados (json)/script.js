const deserializado = {"nombre" : "Juan", "edad" : "22", "profesion" : "programador"}

// Serializar un JSON
const serializado = JSON.stringify(deserializado);

console.log("Objeto Deserializado: " + typeof deserializado);
console.log("Objeto Serializado: " + typeof serializado);

// Deserealizar un JSON
const deserealizar = JSON.parse(serializado);
console.log(typeof deserializado);