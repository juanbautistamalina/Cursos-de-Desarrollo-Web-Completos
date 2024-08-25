let btn1 = document.querySelector(".btn-1");
btn1.onclick = mostrarAlerta;


function mostrarAlerta(){
    alert("Haz presionado sobre el botón 1");
}


let btn2 = document.querySelector(".btn-2");
btn2.addEventListener("click", () =>{
    alert("Haz presionado sobre el botón 2")
})