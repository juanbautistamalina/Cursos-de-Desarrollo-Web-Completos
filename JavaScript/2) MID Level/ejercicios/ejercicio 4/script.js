/* Los datos de Cofla y de otros alumnos fueron recibidos y ya están almacenados, ahora hay que crear un 
   sistema que muestre esa información y se pueda asignar cuando se rinde.

    - La interfaz debe ser agradable y atractiva
    - Debe contener todos lso datos de manera estructurada
    - El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
    - Si el profesor confirma, los datos se deben actualizar y reemplazar el espacio de selección de semana
    por la semana seleccionada   */

let alumnos = [{
    nombre: "Juan Bautista Malina",
    email: "malinajuanbautista.contacto@gmail.com",
    materia: "Programación"
},{
    nombre: "Kevin Romero",
    email: "kevin@gmail.com",
    materia: "Cálculo 2"
},{
    nombre: "Walter Pellegrini",
    email: "walter@gmail.com",
    materia: "Física 1"
},{
    nombre: "Milton López",
    email: "milton@gmail.com",
    materia: "BBDD 3"
}];

const btnConfirmar = document.querySelector(".btn-confirmar");
const contenedor = document.querySelector(".grid-container"); 



for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
            <select class="semana-elegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>
        </div>`;
    
    contenedor.innerHTML += htmlCode;
}


btnConfirmar.addEventListener("click", () =>{
    let confirmar = confirm("¿Realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(btnConfirmar)
        let elementos  = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            let semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
})