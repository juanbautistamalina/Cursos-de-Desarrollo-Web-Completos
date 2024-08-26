const nota = document.getElementById("nota");
const btnEnviar = document.getElementById("snd-nota");


btnEnviar.addEventListener("click", ()=>{
    let resultado, mensaje;
    try{
        resultadoInicial = parseInt(nota.value);
        
        if(isNaN(resultadoInicial)){
            throw "error"
        }

        mensaje = defunirMensaje(resultadoInicial);
        resultado = verificarAprobacion(resultadoInicial);

    }catch(e){
        resultado = "Error";
        mensaje = "Has introducido texto en lugar de números";
    }

    abrirModal(resultado, mensaje);
});





function abrirModal(res, msg){
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex"
    modal.style.animation = "aparecer 1s forwards"
}

function defunirMensaje(ri){
    let resultado;
    switch(ri){
        case 1:
            resultado = "Desaprobado totalmente.";
            break;

        case 2: 
            resultado = "Pésimo";
            break;

        case 3: 
            resultado = "Malísimo";
            break;

        case 4: 
            resultado = "Muy Mal";
            break;

        case 5: 
            resultado = "Mal";
            break;

        case 6: 
            resultado = "Regular";
            break;

        case 7: 
            resultado = "Bien";
            break;

        case 8: 
            resultado = "¡Muy Bien!";
            break;
        
        case 9: 
            resultado = "¡Excelente!";
            break;
        
        case 10: 
            resultado = "¡Insuperable!";
            break;
        
        default:
            resultado = null; 
            break;  
    } 
    return resultado;
}


function verificarAprobacion(nota){
    if(nota >= 7){
        return `<span class="green">APROBADO</span>`;
    }
    return `<span class="red">DESAPROBADO</span>`;
    
}