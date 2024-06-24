/* Cofla feliz por haber empezado las clases volvió a su casa y ya tiene tarea básica de cálculo; tiene que hacer
un par de ejercicios de matemática que influyen suma, resta, división y multiplicación. Realizar esto con una
calculadora puede ser mucho más efectivo.
    - Crear calculadora que nos simplifique el trabajo. 
*/


function sumar(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

function restar(num1, num2){
    let resultado = num1 - num2;
    return resultado;
}

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

function dividir(num1, num2){
    let resultado = num1 / num2;
    return resultado;
}



let numero1; 
let numero2;
let resultado;
let operacion = parseInt(prompt(`¿Qué operación deseas realizar?:
    
    1. Suma 
    2. Resta 
    3. Multiplicación 
    4. División`));


if(operacion == 1){
    numero1 = parseInt(prompt("Introduce el primer número para sumar"));
    numero2 = parseInt(prompt("Introduce el segundo número para sumar"));
    resultado = sumar(numero1, numero2);
    alert("El resultado es "+ resultado)
}
else if(operacion == 2){
    numero1 = parseInt(prompt("Introduce el primer número para restar"));
    numero2 = parseInt(prompt("Introduce el segundo número para restar"));
    resultado = restar(numero1, numero2);
    alert("El resultado es "+ resultado)
}
else if(operacion == 3){
    numero1 = parseInt(prompt("Introduce el primer número para multiplicar"));
    numero2 = parseInt(prompt("Introduce el segundo número para multiplicar"));
    resultado = dividir(numero1, numero2);
    alert("El resultado es "+ resultado)
}
else if(operacion == 4){
    numero1 = parseInt(prompt("Introduce el primer número para dividir"));
    numero2 = parseInt(prompt("Introduce el segundo número para dividir"));
    resultado = multiplicar(numero1, numero2);
    alert("El resultado es "+ resultado)
}
else{
    alert("Has ingresado una opción no válida.")
}