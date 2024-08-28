/* Cofla está en su último año y necesita recuperar todas sus notas para que le puedan decir si efectivamente pasó al último
   semestre, de ser así... Cofla ya estaría a un solo paso de finalizar su carrera como ingeniero. 
   Pero hay un problema: Estas notas están almacenadas en otro servidor.
   
   - Crear un sistema que almacene toda la información de las materias y las muestre en pantalla.*/


const materiasHTML = document.querySelector(".materias");

const materias = [
   {
      nombre: "Programación 4",
      nota: "8"
   },
   {
      nombre: "Cálculo 3",
      nota: "7"
   },
   {
      nombre: "Bases de Datos 3",
      nota: "6"
   },
   {
      nombre: "Física 4",
      nota: "7"
   },
   {
      nombre: "Matemáticas Discretas",
      nota: "7"
   }
]



function obtenerMateria(id){
   return new Promise((resolve, reject) =>{
      materia = materias[id];
      if(materia == undefined) reject("La materia no existe");
      else setTimeout(() => {resolve(materia)}, Math.random()*400);
   })
}

// obtenerMateria(0).then(resultado => console.log(resultado));

const devolverMaterias = async ()=>{
   let materia = [];
   for(let i=0; i < materias.length; i++){
      materia[i] = await obtenerMateria(i);
      let newHTMLCode = `
       <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
      
      materiasHTML.innerHTML += newHTMLCode;
   }
}

devolverMaterias()