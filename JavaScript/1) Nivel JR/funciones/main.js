function inciar_sesion(){
    let contraseña = prompt("Introduce tu contraseña: ");
    if(contraseña == "12345"){
        alert("Bienvenido, has accedido a tu cuenta");
    }
    else{
        alert("Contraseña incorrecta");
    }
}

inciar_sesion()