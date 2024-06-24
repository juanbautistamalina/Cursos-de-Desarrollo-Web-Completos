let nombres_original = ["Juan", "Beto", "Milton", "Gastón"];
let nombres = ["Juan", "Beto", "Milton", "Gastón"];
let numeros_original = [1, 2, 3, 4, 5];
let numeros = [1, 2, 3, 4, 5];
let array_original = ["b", "m", "z", "a", "c"];
let array = ["b", "m", "z", "a", "c"];

// MÉTODOS TRANSFORMADORES:

// POP(): Elimina el último elemento, y lo muestra
let pop = nombres.pop(); 

// PUSH(): Agregar uno o más elementos al final del array
let push  = nombres.push("Kevin"); 


// REVERSE(): Invierte el orden de los elementos de un array
let reverse = numeros.reverse(); 

// SHIFT(): Elimina el primer elemento, y lo muestra
let shift = nombres.shift(); 

// UNSHIFT(): Agregar elementos al principio del array
let resultado = nombres.unshift("Mateo", "Ulises");

// SORT(): Ordena el array (de menor a mayor, o alfabéticamente)
let sort = array.sort();

// SPLICE(): Elimina o reemplaza elementos de un array (start, cant_elementos, objeto_añadir)
// let nombres_copia = nombres;
// let splice = nombres.splice(3, 4, "JuanB") 

//-----------------------------------------------------------------------------------------------

// MÉTODOS ACCESORES:

// JOIN(): Une todos los elementos en una cadena de texto, y se puede colocar un separador
let array_nombres = ["Juan", "Beto", "Gastón", "Milton"];
let join = array_nombres.join(" - "); 

// SLICE(): Extraer de x a y, posiciones, el último no incluido
let slice = array_nombres.slice(0, 2)

//-----------------------------------------------------------------------------------------------

// MÉTODOS DE REPETICIÓN:

// FILTER(): Crea un array con todos los elementos que cumplan una condición
let arreglo_nombres = ["Juan", "A", "B", "C", "Milton", "José"]
let filter = arreglo_nombres.filter(nombres => nombres.length >= 4);

// FOREACH(): Ejecuta una función indicada una vez por cada elemento del array
let forEach = nombres.forEach(nombres => console.log("Nombre: "+ nombres)) 

//-----------------------------------------------------------------------------------------------

document.write(`
    <h1>Métodos de Arrays</h1>
    <h2>Transformadores: </h2>
    <b>Array 1: </b> [${nombres_original}]<br>
    <b>Array 2: </b> [${numeros_original}] <br>
    <b>Array 3: </b> ${array_original} <br><br>
    
    <b style=color:green>pop(): </b> El último elemento eliminado fue: <b>${pop}</b> <br>
    <b style=color:green>push():</b> El último elemento añadido está en la posición <b>${push}</b><br>
    <b style=color:green>reverse(): </b> <b>${reverse}</b> <br>
    <b style=color:green>pop(): </b> Primer elemento removido: <b>${shift}</b><br>
    <b style=color:green>unshift(): </b> Añadiendo 2 elementos al principio: <b>${nombres}</b> <br>
    <b style=color:green>sort(): </b> Ordenando (de menor a mayor, o alfabéticamente): <b>${sort}</b> <br>
    <b style=color:green>splice(): </b> <br>
    1. <i>Array Original: </i>${nombres}<br>
    2. <i>Elementos Eliminados:</i> ${nombres.splice(3, 4, "JuanB")}<br>
    3. <i>Array Modificado: ${nombres}</i><br><br>

    <hr>

    <h2> Accesores: </h2>
    <b>Array: </b> [${array_nombres}]<br><br>
    <b style=color:green>join(): </b> <b>${join}</b><br>
    <b style=color:green>slice(): </b> <b>${slice}</b><br>

    <hr>

    <h2> De Repetición: </h2>
    <b>Array: </b> [${arreglo_nombres}]<br><br>
    <b style=color:green>filter(): </b> <b>${filter}</b><br>
    <b style=color:green>forEach(): </b> <b>${forEach}</b><br>
    `);
