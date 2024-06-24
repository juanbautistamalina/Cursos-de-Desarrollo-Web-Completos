/* Comienzan las clases del cliclo básico de la universidad (ya que cofle quiere ser programador
y se inscribió en la facultad de ingeniería para estudiar desarrollo de software).
En su curso en total son 19 alumnos pero surgió un problema que complicó un poco a la 
facultad: Se rompió el sistema de registro de asistencias y durante los próximos 30 dias no se podrán
hacer registros de datos de ningún tipo, por ende las clases no podrán comenzar hasta que esto esté solucionado.

- Crear mini - sistema que permita registrar los alumnos que están presentes y ausentes en clase.
- Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
- Se puede tener un máximo de 10% de ausencias por semestre, qi se tienen más aclarar que está reprobado. */


function tomarAsistencia(nombre, p){
    let presencia = prompt(`${nombre} Presente (P)| Ausente (A)`);

    if(presencia == "p" || presencia == "P"){
        alumnos_totales[p][1]++;
    }
}


// 1. Solicitar la cantidad de alumnos
let cantidad_alumnos = parseInt(prompt("¿Cuántos alumnos son?"));
let alumnos_totales = [];


// 2. Cargando los nombres de los alumnos
for(i = 0; i < cantidad_alumnos; i++){
    // Ejemplo: [[Juan, 0], [Milton, 0], [Walter, 0]]]
    alumnos_totales[i] = [prompt(`Nombre del alumno ${i+1}`), 0];
}

// 3. Tomar asistencia durante 30 días
for(i = 0; i<30; i++){
    for(alumno in alumnos_totales){
        tomarAsistencia(alumnos_totales[alumno][0], alumno);
    }
}

// 4. Comprobar asistencias
for(alumno in alumnos_totales){

    let asistencias = alumnos_totales[alumno][1];
    let inasistencias = 30 - alumnos_totales[alumno][1];

    let resultado = `<b>${alumnos_totales[alumno][0]}</b><br>
    ____________Asistencias: ${asistencias}<br>
    ____________Inasistencias: ${inasistencias} `;

    if(inasistencias > 18){
        resultado+= `<b style="color:red">REPROBADO POR INASISTENCIAS</b><br><br>`;
    }else{
        resultado+="<br><br>"
    }

    document.write(resultado);
}