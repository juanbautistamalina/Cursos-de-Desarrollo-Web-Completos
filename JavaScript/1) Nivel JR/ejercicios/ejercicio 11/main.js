/* Cofla está sufriendo un poco... ya que a pesar de que cree contar con el 90% de asistencias y de tener un
    promedio mayor a 7 / 10, no cree entregar el 75% de trabajos prácticos ya que necesita dividir las 
    tareas que hará semanalmente. Cofla debe: 
    Trabajar 8 horas por dia durante 2 semanas entre las cuales tiene que: 
    - 24 horas estudiar
    - 24 horas hacer trabajos prácticos
    - 56 horas de trabajar
    - 8 horas de hacer las cosas de la casa

    - Organizar las actividades diariamente. 
    - Utiizar la consola para organizar todo.
    - El tiempo por tarea no debe superar las 4 horas. 
*/

let tp = "100 minutos para hacer trabajos prácticos";
let estudio = "100 minutos de estudio";
let trabajo = "240 minutos de trabajo";
let tareas_de_la_casa = "30 minutos de tareas de la casa";
let descanso = "10 minutos de descanso";  



for(let i = 1; i<=14; i++){

    if(i == 1){
        console.groupCollapsed("Semana 1");
    }

    console.groupCollapsed(`día ${i}`);
    console.log(tp);
    console.log(estudio);
    console.log(trabajo);
    console.log(tareas_de_la_casa);
    console.log(descanso);
    console.groupEnd();

    if(i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}
console.groupEnd();





// for(let i = 8; i<=14; i++){
//     console.groupCollapsed(`día ${i}`);
//     console.log(tp);
//     console.log(estudio);
//     console.log(trabajo);
//     console.log(tareas_de_la_casa);
//     console.log(descanso);
//     console.groupEnd();
// }

// console.groupEnd();