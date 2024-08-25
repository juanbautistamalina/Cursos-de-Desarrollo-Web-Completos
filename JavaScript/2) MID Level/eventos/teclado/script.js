const input = document.querySelector("input");


input.addEventListener("keydown", () =>{
    console.log("Una tecla fue presionada");
})


input.addEventListener("keypress", () =>{
    console.log("Una tecla fue presionada y soltada");
})


input.addEventListener("keyup", () =>{
    console.log("Una tecla fue soltada");
})