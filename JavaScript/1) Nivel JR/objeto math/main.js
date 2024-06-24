// SQRT(): Calcular raíz cuadrada
let sqrt = Math.sqrt(25);

// CBRT(): Calcular raíz cúbica
let cbrt = Math.cbrt(27); 

// MAX(): Devuelve el mayor de varios números
let max = Math.max(100, 14, 50, 29, 10, 67, 98, 2, 1); 

// MIN(): Devuelve el menor
let min = Math.min(100, 14, 50, 29, 10, 67, 98, 2, 1);

// RANDOM(): Devuelve un numero aleatorio entre 0 y 1 
let random = Math.random() * 100;

// ROUND(): Devuelve un numero redondeado al entero más cercano
let round = Math.round(random);

// FLOOR(): Redondea para abajo
let floor = Math.floor(random) 

document.write(`
    <h1>Objeto Math</h1>

    <h2>Métodos: </h2>    
    <b style=color:green>sqrt(): </b> La raíz cuadrada de 25 es <b>${sqrt}</b> <br>
    <b style=color:green>cbrt(): </b> La raíz cúbica de 27 es <b>${cbrt}</b><br>
    <b style=color:green>max(): </b> (100, 14, 50, 29, 10, 67, 98, 2, 1) -> El mayor es: <b>${max}</b><br>
    <b style=color:green>min(): </b> (100, 14, 50, 29, 10, 67, 98, 2, 1) -> El menir es: <b>${min}</b><br>
    <b style=color:green>random(): </b> Número aleatorio generado: <b>${random}</b><br>
    <b style=color:green>round(): </b> Número aleatorio redondeado al entero más cercano: <b>${round}</b><br>
    <b style=color:green>floor(): </b> Número aleatorio redondeado para abajo: <b>${floor}</b><br>`);
