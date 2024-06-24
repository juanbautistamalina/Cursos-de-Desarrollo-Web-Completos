let cadena1 = "Mi nombre es Juan";
let cadena2 = "";
let cadena3 = "abc";
let cadena4 = "123 "
let nombre = "   juan   "

// CONCAT(): Juntar 2 o más cadenas
let concat = cadena1.concat(" Bautista");

// STARTSWITH(): Comprobar si una cadena comienza con ...
let startsWith = cadena1.startsWith("M"); 

// ENDSWITH(): // Comprobar si una cadena termina con ...
let endsWith = cadena1.endsWith("n"); 

// INCLUDES(): Comprobar si una cadena se encuentra dentro de otra cadena. Devuelve true o false
let includes = cadena1.includes("Juan"); 

// INDEXOF(): Comprueba si una cadena se encuentra dentro de otra, pero devuelve la posición en caso de encontrarla o -1 si no está
let indexOf = cadena1.indexOf("Juan"); 

// PADSTART(): Rellena la cadena con la/las letras indicadas, hasta la cantidad indicada. Comienza desde el principio
let padStart = cadena3.padStart(6,"1");

// PADEND(): Rellena la cadena con la/las letras indicadas, hasta la cantidad indicada. Comienza desde el final
let padEnd = cadena3.padEnd(6,"1");

// REPEAT(): Repite la cadena la cantidad de veces indicada
let repeat = cadena4.repeat(4) 

// SPLIT(): Separa una cadena con lo indicado, y retorna un array
let split = cadena1.split(" "); 

// SUBSTRING: Extrae de una cadena, un pedazo indicado y devuelde una nueva cadena con ese pedazo. 
let subString = cadena1.substring(13);

// TOLOWERCASE(): Convertir cadena a minúsculas
let toLowerCase = cadena1.toLowerCase() 

// TOUPPERCASE(): Convertir cadena a mayúsculas
let toUpperCase = cadena1.toUpperCase()  

// TOSTRING(): Convierte una cadena a string (aplicar a números)
let num = 50;
let toString = num.toString(); 

// TRIM(): Eliminar los espacios de una cadena
let trim = nombre.trim(); 

// TRIMSTART(): elimina los espacios del principio
// TRIMEND(): elimina los espacios del final



document.write(`<h1>Métodos de Cadenas</h1><br>
    <b>Cadena 1: </b> ${cadena1} <br>
    <b>Cadena 2: </b> ${cadena2} <br>
    <b>Cadena 3: </b> ${cadena3} <br>
    <b>Cadena 4: </b> ${cadena4} <br>
    <b>Cadena 5: </b> ${nombre} (tiene espacios al principio y al final)<br><br>
    
    <b style=color:green>concat(): </b> ${concat} <br>
    <b style=color:green>startsWith(): </b> ¿Empieza con "M"?: <b>${startsWith}</b><br>
    <b style=color:green>endsWith(): </b> Termina con "n"?: <b>${endsWith}</b><br>
    <b style=color:green>includes(): </b> ¿${cadena1} incluye "Juan?: <b>${includes}</b><br>
    <b style=color:green>indexOf(): </b> ¿La cadena "Juan" a partir de qué posición se encuentra? <b>${indexOf}</b><br>
    <b style=color:green>padStart(): </b> ${padStart} <br>
    <b style=color:green>padEnd(): </b> ${padEnd} <br>
    <b style=color:green>repeat(): </b> ${repeat} <br>
    <b style=color:green>split(): </b> ${split} <br>
    <b style=color:green>toLowerCase(): </b> ${toLowerCase} <br>
    <b style=color:green>toUpperCase(): </b> ${toUpperCase} <br>
    <b style=color:green>subString(): </b> ${subString} <br>
    <b style=color:green>toString(): </b> (número convertido a string) ${toString} <br>
    <b style=color:green>trim(): </b> ${trim} <br>
    `);


