/* La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor
y todos los alumnos que se anotaron en dichas clases, pero necesitamos ver esto más ordenadamente. 

- Crear un funcion que al pasarle como parametro la materia nos devuelva: 
    Profesor Asignado
    El nombre de todos los alumnos

- Crear funcion que nos diga en cuantas clases está cofla.
- Nombrar las clases en las que está y los profesores de cada una. 
*/



/* Esta función recibe como parámetro una materia, y muestra los datos: Materia, Profesor y Alumnos */
function mostrarInfo(materia){
    document.write(`
        <b>Materia:  </b> ${materia[0]}<br>
        <b>Profesor: </b>: ${materia[1]}<br>
        <b>Alumnos:  </b>: `);
    
    for(let i = 2; i<materia.length; i++){

        // Punto al final del listado de alumnos (efecto visual - OPCIONAL)
        if(i == materia.length - 1){
            document.write(`${materia[i]}. `);
            break;
        }

        document.write(`${materia[i]}, `)
    }

    document.write("<br><br>")
}


/* Esta función recibe como parámeros un array que contiene todas las materias, y el nombre del alumno.
    Mediante 2 bucles for, recorre cada array (cada materia) dentro del array que contiene todas las materias,
    y en caso de que encuentre que la materia tiene como alumno inscrito al alumno pasado por parámetro,
    el nombre de la materia es almacenado en un nuevo array. */
function contarClases(materias, alumno){

    let clases_presentes = [];
    let cantidad_total = 0;

    for(let i = 0; i<materias.length; i++){
        for(let j = 0; j<materias.length; j++){
            
            if(materias[i][j] == alumno){
                
                // Ejemplo: clases_presentes[0] = materias[CADA ARRAY][MATERIA]
                // materias: [["Matemáticas", ..., ...], ["Programación", ..., ...], ["Cálculo", ..., ...]]
                /* Por eso J es siempre 0, ya que es la posición en la que está el nombre de la materia
                    y lo que cambia es el array. En resumen se analizan todos los arrays en la posición 0
                    que es donde está en nombre de la materia. */
                
                    clases_presentes[cantidad_total] = materias[i][0];
                cantidad_total++;
                
            }   
        }
    }
    document.write(`El alumno <b>${alumno}</b> está en las clases: <b style="color: green">${clases_presentes}</b>`);
}


//                   0              1             2       3
// MATERIA :      [MATERIA,      PROFESOR,     ALUMNO, ALUMNO ...]
let matematica = ["Matemáticas","Danil Dubov", "juan", "simon", "mateo", "ulises"];
let programacion = ["Programación", "L. Dalto", "cofla", "juan", "ulises", "kevin"]; 
let calculo = ["Cálculo", "Frederick Starks","juan", "kevin", "simon", "mateo" ];
let ciencias_de_la_computacion = ["Ciencias de la Computación", "John Watson", "cofla", "kevin", "simon", "ulises"];
let logica = ["Lógica", "Bobby Fisher", "walter", "mateo", "ulises", "mateo"];

materias = [matematica, programacion, calculo, ciencias_de_la_computacion, logica];

mostrarInfo(matematica);
mostrarInfo(programacion);
mostrarInfo(calculo);
mostrarInfo(ciencias_de_la_computacion);
mostrarInfo(logica);

contarClases(materias, "cofla");