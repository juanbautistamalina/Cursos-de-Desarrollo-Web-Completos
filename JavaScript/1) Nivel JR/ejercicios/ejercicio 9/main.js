/* Cofla ya vió las 12 materias y se decidió en cual se va a inscribir así que en 
tres días lo hará. El problema es que se rompió el sistema de inscripciones.

- Crear una funcion para preguntarle a cofla en qué materia se quiere inscribir.
- Si ya hay 20 alumnos anotados en la materia, negarle la inscripción.
- Si hay menos de 20 alumnis, inscribir a cofla y añadirlo a la lista de alumnos. */

function inscribirse(alumno, materia) {
    
    if(interruptor == false){
        document.write(`<h1>Sistema de Inscripciones</h1>
                        <h2>Materia: ${materia}</h2><br>`);
        interruptor = true;
    }
    

  switch (materia) {
    case "matematica":
      if (matematica.length >= 22) {
        document.write(
          `Lo sentimos <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas. <br>`
        );
      } else {
        matematica.push(alumno);
        document.write(
          `¡Felicidades <b>${alumno}</b>! te has inscrito en ${materia} correctamente. <br>`
        );
      }
      break;


    case "programacion":
      if (programacion.length >= 22) {
        document.write(
          `Lo sentimos <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas. <br>`
        );
      } else {
        programacion.push(alumno);
        document.write(
          `¡Felicidades <b>${alumno}</b>! te has inscrito en ${materia} correctamente. <br>`
        );
      }
      break;


    case "calculo":
      if (calculo.length >= 22) {
        document.write(
          `Lo sentimos <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas. <br>`
        );
      } else {
        calculo.push(alumno);
        document.write(
          `¡Felicidades <b>${alumno}</b>! te has inscrito en ${materia} correctamente. <br>`
        );
      }
      break;


    case "ciencias de la computacion":
      if (ciencias_de_la_computacion.length >= 22) {
        document.write(
          `Lo sentimos <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas. <br>`
        );
      } else {
        ciencias_de_la_computacion.push(alumno);
        document.write(
          `¡Felicidades <b>${alumno}</b>! te has inscrito en ${materia} correctamente. <br>`
        );
      }
      break;


    case "logica":
      if (logica.length >= 22) {
        document.write(
          `Lo sentimos <b>${alumno}</b>, las clases de <b>${materia}</b> ya están llenas. <br>`
        );
      } else {
        logica.push(alumno);
        document.write(
          `¡Felicidades <b>${alumno}</b>! te has inscrito en ${materia} correctamente. <br>`
        );
      }
      break;
  }
}

let matematica = ["Matemáticas","Danil Dubov","juan","simon","mateo","ulises"];
let programacion = ["Programación","L. Dalto","cofla","juan","ulises","kevin"];
let calculo = ["Cálculo","Frederick Starks","juan","kevin","simon","mateo"];
let ciencias_de_la_computacion = ["Ciencias de la Computación","John Watson","cofla","kevin","simon","ulises"];
let logica = ["Lógica", "Bobby Fisher", "walter", "mateo", "ulises", "mateo"];

let interruptor = false;

// INSCRIPCIONES:
inscribirse("Carlos", "programacion");
inscribirse("Gaston", "programacion");
inscribirse("Eugenio", "programacion");
inscribirse("Bernardo", "programacion");
inscribirse("Pedro", "programacion");
inscribirse("Franco", "programacion");
inscribirse("Milton", "programacion");
inscribirse("Mario", "programacion");
inscribirse("Fernando", "programacion");
inscribirse("Pepe", "programacion");
inscribirse("Ana", "programacion");
inscribirse("Mateo", "programacion");
inscribirse("Anastasio", "programacion");
inscribirse("Silvio", "programacion");
inscribirse("Fabio", "programacion");
inscribirse("Agusto", "programacion");
inscribirse("Benjamín", "programacion");
inscribirse("Andrés", "programacion");

