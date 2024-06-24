/* Un joven muy afortunado logró ganar el primer premio de la lotería. 
Esta persona decide hacer una fiesta para festejar. Compró una máquina que solo deja pasar a los mayores de 
edad entre otras cosas: 
    - Dejar pasar solo a los mayores de edad
    - La primer persona que entre después de las 2AM NO PAGA. */


let edad;
let bandera = false;

function entradaFiesta(horario){

    edad = parseInt(prompt("¿Cuál es tu edad?"));

    if(edad >= 18){
        if(horario >= 2 && horario < 6 && bandera == false){
            alert("Podés pasar GRATIS por ser la primera persona después de las 2AM.");
            bandera = true;
        }else{
            alert(`Son las ${horario}:00HS y podés pasar, pero tenes que pagar la entrada`);
        }
    
    }else{
        alert("Sos menor de edad, no podés pasar.")
    }
}


entradaFiesta(21);
entradaFiesta(22);
entradaFiesta(12);
entradaFiesta(2);
entradaFiesta(3);
entradaFiesta(4);