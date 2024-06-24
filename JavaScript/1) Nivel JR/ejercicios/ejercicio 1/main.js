/* CONSIGNA:
3 chicos de 23 años entran a una heladería a comprar un helado
pero hay un problema: los precios no están al lado de cada estante
con su respectivo helado.
Ellos quieren comprar el helado más caro que puedan con la
plata que tienen.

Los precios de los helados son los siguientes:
- Palito de helado de agua $0.6 USD
- Palito de helado de crema $1 USD
- Bombón helado de vainilla $1.6 USD
- Bombón helado de chocolate $1.7 USD
- Bombón helado de frutilla $1.8 USD
- Potecito de helado con confites $2.9 USD
- Pote de 1/4 $2.9 USD

Crear Soluciones:
- Pedirles que ingresen el monto que tienen y mostrarles el helado
más caro que puedan comprar. 
- Si hay 2 o más con el mismo precio, mostrar ambos-
- Mostrar el vuelto. 

*/



let dinero_cofla = parseInt(prompt("¿Cuánto dinero tiene Cofla?"));
let dinero_juan = parseInt(prompt("¿Cuánto dinero tiene Juan?"));
let dinero_walter = parseInt(prompt("¿Cuánto dinero tiene Walter?"));


// COFLA
if(dinero_cofla >= 0.6 && dinero_cofla < 1){
    alert(`Cofla, te alcanza para el Palito de helado de agua y te sobran ${dinero_cofla-0.6} USD`)
}
else if(dinero_cofla >= 1 && dinero_cofla < 1.6){
    alert(`Cofla, te alcanza para el Palito de helado de crema y te sobran ${dinero_cofla-1} USD`)
}
else if(dinero_cofla >= 1.6 && dinero_cofla < 1.7){
    alert(`Cofla, te alcanza para el Bombón helado de vainilla y te sobran ${dinero_cofla-1.6} USD`)
}
else if(dinero_cofla >= 1.7 && dinero_cofla < 1.8){
    alert(`Cofla, te alcanza para el Bombón helado de chocolate y te sobran ${dinero_cofla-1.7} USD`)
}
else if(dinero_cofla >= 1.8 && dinero_cofla < 2.9){
    alert(`Cofla, te alcanza para el Bombón helado de frutilla y te sobran ${dinero_cofla-1.8} USD`)
}
else if(dinero_cofla >= 2.9){
    alert(`Cofla, te alcanza para el Potecito de helado con confites y para el Pote de 1/4. Te sobran ${dinero_cofla-2.9} USD`)
}
else{
    alert("Cofla, No te alcanza para ningún helado.")
}



// JUAN
if(dinero_juan >= 0.6 && dinero_juan < 1){
    alert(`Juan, te alcanza para el Palito de helado de agua y te sobran ${dinero_juan-0.6} USD`)
}
else if(dinero_juan >= 1 && dinero_juan < 1.6){
    alert(`Juan, te alcanza para el Palito de helado de crema y te sobran ${dinero_juan-1} USD`)
}
else if(dinero_juan >= 1.6 && dinero_juan < 1.7){
    alert(`Juan, te alcanza para el Bombón helado de vainilla y te sobran ${dinero_juan-1.6} USD`)
}
else if(dinero_juan >= 1.7 && dinero_juan < 1.8){
    alert(`Juan, te alcanza para el Bombón helado de chocolate y te sobran ${dinero_juan-1.7} USD`)
}
else if(dinero_juan >= 1.8 && dinero_juan < 2.9){
    alert(`Juan, te alcanza para el Bombón helado de frutilla y te sobran ${dinero_juan-1.8} USD`)
}
else if(dinero_juan >= 2.9){
    alert(`Juan, te alcanza para el Potecito de helado con confites y para el Pote de 1/4. Te sobran ${dinero_juan-2.9} USD`)
}
else{
    alert("Juan, No te alcanza para ningún helado.")
}


// WALTER
if(dinero_walter >= 0.6 && dinero_walter < 1){
    alert(`Walter, te alcanza para el Palito de helado de agua y te sobran ${dinero_walter-0.6} USD`)
}
else if(dinero_walter >= 1 && dinero_walter < 1.6){
    alert(`Walter, te alcanza para el Palito de helado de crema y te sobran ${dinero_walter-1} USD`)
}
else if(dinero_walter >= 1.6 && dinero_walter < 1.7){
    alert(`Walter, te alcanza para el Bombón helado de vainilla y te sobran ${dinero_walter-1.6} USD`)
}
else if(dinero_walter >= 1.7 && dinero_walter < 1.8){
    alert(`Walter, te alcanza para el Bombón helado de chocolate y te sobran ${dinero_walter-1.7} USD`)
}
else if(dinero_walter >= 1.8 && dinero_walter < 2.9){
    alert(`Walter, te alcanza para el Bombón helado de frutilla y te sobran ${dinero_walter-1.8} USD`)
}
else if(dinero_walter >= 2.9){
    alert(`Walter, te alcanza para el Potecito de helado con confites y para el Pote de 1/4. Te sobran ${dinero_walter-2.9} USD`)
}
else{
    alert("Walter, No te alcanza para ningún helado.")
}




