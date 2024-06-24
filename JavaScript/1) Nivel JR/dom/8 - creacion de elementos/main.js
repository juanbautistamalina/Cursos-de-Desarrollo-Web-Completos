// FORMAS DE CREAR ELEMENTOS:


// FORMA 1:
let contenedor = document.querySelector(".contenedor");
let item = document.createElement("LI"); // Crear elemento
let contenido = document.createTextNode("Item 1"); // Crear contenido
item.appendChild(contenido); // Unir el contenido al elemento
contenedor.appendChild(item) // Unir el elemento al contenedor


// FORMA 2:
// let contenedor = document.querySelector(".contenedor");
// let item = document.createElement("LI");
// item.innerHTML = "Este es un item de la lista";
// contenedor.appendChild(item)

//---------------------------------------------------
let fragmento = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
  
    if(i == 0){
        const titulo = document.createElement("H1");
        titulo.innerHTML = "Título Introductorio";
        contenedor.appendChild(titulo)
    }

  // Paso 1: Crear el elemento tipo li
  const item = document.createElement("LI");

  // Paso 2: Crear el contenido para el elemento
  item.innerHTML = `Elemento de la lista N°${i+1}`;

  fragmento.appendChild(item); // Paso 3: Unir cada item al fragmento
}

contenedor.appendChild(fragmento);  // Paso 4: Unir el fragmento al contenedor