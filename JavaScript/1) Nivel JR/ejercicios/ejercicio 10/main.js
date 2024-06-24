/* Terminó el primer semestre y cofla no sabe si aprobará o no las materias, para lograrlo necesitará:
    Contar con al menos el 90% de asistencia.
    El promedio por materia debe ser de al menos 7 / 10.
    Debe tener obligatoriamente los 4 trabajos prácticos entregados. 

    - Solicitar los datos y decirle si aprueba o no.
    - Mostrar todo esto con colores representativos en consola
*/


// [asistencia, promedio, trabajos_prácticos] (hay 4 trabajos prácticos en total)
let fisica = [80, 5, 4, "física"];
let matematica = [90, 7, 3, "matemática"];
let quimica = [60, 9, 2, "química"];
let programacion = [95, 8, 4, "programación"];
let calculo = [40, 6, 1, "cálculo"];
let ciencias_de_la_computacion = [90, 7, 4, "ciencias de la computación"];
let bbdd = [80, 7, 1, "bases de datos"];
let logica = [30, 6, 3, "lógica"];
let algebra = [30, 6, 2, "álgebra"];

let materias = [fisica, matematica, quimica, programacion, calculo, ciencias_de_la_computacion, bbdd, logica, algebra];


function aprobo(){
    for(i = 0; i<materias.length; i++){
        
        let asistencias = materias[i][0];
        let promedio = materias[i][1];
        let tp = materias[i][2];


        // Nombre de la materia
        console.log(materias[i][3] + ":");

        if(asistencias >= 90){
            console.log("%c  Asistencias en orden", "color:green");
        }else{
            console.log("%c  Falta de Asistencias", "color:red");
        }

        if(promedio >= 7){
            console.log("%c  Promedio en orden", "color:green");
        }else{
            console.log("%c  Promedio Desaprobado", "color:red");
        }

        if(tp = 4){
            console.log("%c  Trabajos prácticos en orden", "color:green");
        }else{
            console.log("%c  Faltan Trabajos Prácticos por entregar", "color:red");
        }
    }

}


aprobo();