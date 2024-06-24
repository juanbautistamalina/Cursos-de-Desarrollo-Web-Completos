// Concatenar Números
let num1 = 10;
let num2 = 5;
console.log(""+num1+num2); // En este caso los numeros se convierten en texto. 

// Forma 1
let nombre = "Juan Bautista";
let apellido = " Malina";
let nombre_completo = nombre.concat(apellido);
console.log(nombre_completo);

// Forma 2
console.log("Mi nombre es: " + nombre + apellido);

// Forma 3
console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`);