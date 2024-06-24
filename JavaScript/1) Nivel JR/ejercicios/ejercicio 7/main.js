/* Cofla ya está terminando el primer semestre del primer ciclo
y la tarea que debe reakuzar es mucho más avanzada de la que tenía
antes, además de suma, resta, multiplicación y división, ahora también
necesitará calcular potencias, raíces cuadradas y cúbicas.

- Perfeccionar calculadora para poder implementar las nuevas funciones */

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

function potenciacion(num1, num2){
    let resultado = num1 ** num2;
    return resultado;
}

function raizCuadrada(num1){
    let resultado = Math.sqrt(num1)
    return resultado;
}

function raizCubica(num1){
    let resultado = Math.cbrt(num1)
    return resultado;
}



let numero1; 
let numero2;
let resultado;
let operacion = parseInt(prompt(`¿Qué operación deseas realizar?:
    
    1. Suma 
    2. Resta 
    3. Multiplicación 
    4. División
    5. Potenciación
    6. Raíz cuadrada
    7. Raíz Cúbica`));


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
else if(operacion == 5){
    numero1 = parseInt(prompt("Introduce la base"));
    numero2 = parseInt(prompt("Introduce el exponente"));
    resultado = potenciacion(numero1, numero2);
    alert("El resultado es "+ resultado)
}
else if(operacion == 6){
    numero1 = parseInt(prompt("Introduce un número para calcular su raíz cuadrada"));
    resultado = raizCuadrada(numero1, numero2);
    alert("El resultado es "+ resultado)
}

else if(operacion == 7){
    numero1 = parseInt(prompt("Introduce un número para calcular su raíz cúbica"));
    resultado = raizCubica(numero1);
    alert("El resultado es "+ resultado)
}
else{
    alert("Has ingresado una opción no válida.")
}