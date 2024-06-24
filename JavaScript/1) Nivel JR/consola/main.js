// LA MAYORÍA DE LOS MÉTODOS DE CONSOLA SE VISUALIZAN EN EL NAVEGADOR Y NO EN UN IDE.

//                      -- FUNCIONES DE REGISTRO --

// ASSERT(): Aparece un mensaje de error en la consola si la afirmación es falsa
console.assert(5 < 3); 

// CLEAR(): Limpia la consola (funciona en el navegador)
console.clear(); 

// ERROR(): Muestra un mensaje de error en la consola
console.error("Error Detectado..."); 

// INFO(): Muestra un mensaje informativo en la consola
console.info("Mensaje Informativo"); 

// LOG(): Muestra un mensaje en la consola
console.log("Mensaje"); 

// TABLE(): Toma como argumento obligatorio un array o un objeto y nos muestra una tabla en consola
console.table([5,4,3,2,1]); 

// WARN(): Muestra un mensaje de advertencia en la consola
console.warn("Adventencia...");


// //                      -- FUNCIONES DE CONTEO --

// COUNT(): Registra el número de veces que se llama a count 
console.count(); 
console.count(); 
console.count(); 

// Resetea el conteo a 0
console.countReset();


// //                    -- FUNCIONES DE AGRUPACIÓN --

// GROUP(): Crea un grupo en línea en el registro de la consola
console.group(); 

// GROUPEND(): Remueve un grupo en línea en el registro de la consola
console.groupEnd(); 

// GROUPCOLLAPSED(): Crea un grupo en línea pero contraído en el registro de la consola
console.groupCollapsed(); 



// //                    -- FUNCIONES DE TEMPORIZACIÓN --

console.time() // Inicia un temporizador

console.timeLog() // Registra el valor actual del temporizador 

console.timeEnd() // Finaliza el temporizador


// //                    -- MODIFICAR ESTILO DEL TEXTO --
console.log("%c hola", "color:green;background:black")