let numero = 1

// SE EJECUTA SIEMPRE QUE UNA CONDICIÓN SEA VERDADERA
document.write("<b>BUCLE WHILE: </b><br>")
while(numero <= 10){
    document.write(numero + "<br>");
    numero++;
}

document.write("<br><br>");
numero = 1;

// SE EJECUTA AL MENOS UNA VEZ, POR MÁS QUE LA CONDICIÓN NO SE CUMPLA
document.write("<b>BUCLE DO WHILE: </b><br>")
do{
    document.write(numero + "<br>");
    numero++;
}while(numero > 10);


document.write("<br><br>");


// SIRVE PRINCIPALMENTE PARA RECORRER ARREGLOS (FOR IN Y FOR OF)
document.write("<b>BUCLE FOR</b><br>")
for(let i=20; i<= 30; i++){
    document.write(i + "<br>");
}


document.write("<br><br>");

animales = ["perro", "gato", "pinguino"];

// For in: Devuelve el índice/posición de los elementos
document.write("<b>FOR IN</b><br>")
for(animal in animales){
    document.write(animal + "<br>");
}

document.write("<br><br>");


document.write("<b>FOR OF</b><br>")
// For of: Devuelve el valor almacenado en cada posición
for(animal of animales){
    document.write(animal + "<br>");
}

