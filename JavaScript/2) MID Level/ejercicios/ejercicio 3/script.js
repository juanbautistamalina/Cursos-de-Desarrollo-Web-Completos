/* Cofla reprobó 2 materias y ahora tiene que enviar un formulario para
   registrarse en la materia que debe.
   
   - El formulario debe contener nombre completo, mail y materia adeudada.
   - Se debe validar que el mail sea válido, que los nombres sean reales.
   - Se debe enviar al servidor de manera pulida.*/


const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const btn = document.getElementById("btn-enviar");
const resultado =  document.getElementById("resultado");

btn.addEventListener("click", (e) =>{
    e.preventDefault();
    let error = validarCampos();

    if(error[0] == true){
       resultado.innerHTML = error[1];
       resultado.classList.add("red");
    }else{
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.remove("red");
        resultado.classList.add("green");
    }
    
})


function validarCampos(){
    let error = [];

    if(nombre.value.length < 4 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es inválido"
        return error;
    }

    else if(email.value.length < 5 ||
            email.value.length > 40 ||
            email.value.indexOf("@") == -1 ||
            email.value.indexOf(".") == -1){
        
        error[0] = true;
        error[1] = "El email es inválido";
        return error;
    }

    else if(materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "La materia ingresada no es válida";
        return error;
    }

    error[0] = false;
    return error;
}