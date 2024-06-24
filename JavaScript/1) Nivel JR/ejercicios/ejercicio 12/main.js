/* Cofla se quedó encerrado en su casa porque se le rompió la llave, pero necesita ir urgente a la facultad 
    porque no puede faltar ni una sola vez si quiere aprobar las materias que le faltan, ya que está al 
    límite de asistencias, entonces tiene que llamar a un cerrajero y pedirle que traiga la llave indicada.
    No hay tiempo suficiente como para que el cerrajero vea cual es la llave indicada, solo puede traer una
    y probar, entonces cofla se da cuenta que es una llave antigua y por ende no hace falta afilarla, solo 
    necesita decirle el modelo de llave para que el cerrajero venga.

    - Indicar las 20 llaves posibles con sus imágenes
*/

let contenedor = document.querySelector(".flex-container");

function crearLlave(nombre, modelo, precio){
    img = `<img width=250px src='img/llave.png'>`;
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio <b>$${precio}</b></p>`;

    return [img, nombre, modelo, precio];
}

let fragmento = document.createDocumentFragment();

for(let i = 1; i<=20; i++){

    let modeloRandom = Math.round(Math.random() * 10000);
    let precioRandom = Math.round(Math.random() * 10 + 30);

    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`, precioRandom);
    
    let div = document.createElement("DIV");
    div.tabIndex = i;
    div.classList.add("flex-item", `item-${i}`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    fragmento.appendChild(div);
    
}

contenedor.appendChild(fragmento);


