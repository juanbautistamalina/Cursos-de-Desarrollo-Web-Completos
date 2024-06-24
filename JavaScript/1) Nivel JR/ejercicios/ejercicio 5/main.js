/* Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a  Cofla le llamaron la atención 3 teléfonos específicamente.
El problema es que ningún vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada ...
Cofla, antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos. 

- Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares
- Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria ram. 
- Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar. 
*/

class Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionPantalla = resolucionPantalla;
        this.resolucionCamara = resolucionCamara;
        this.ram = ram;
        this.encendido = false
    }

    get mostrarDatos(){
        return `<b>Color</b>: ${this.color} <br>
        <b>Peso</b>: ${this.peso} <br>
        <b>RAM</b>: ${this.ram} <br>
        <b>Resolución de Pantalla</b>: ${this.resolucionPantalla} <br>
        <b>Resolución de Cámara</b>: ${this.resolucionCamara} <br><br>`;
    }


    presionarBotonEncendido(){
        if(this.encendido == false){
            alert("Celular Encendido");
            this.encendido = true
        }else{
            alert("Celular Apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("Reiniciando Celular");
        }else{
            alert("El celular está apagado.")
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolución de ${this.resolucionCamara}`)
    }

    grabarVideo(){
        alert(`Video grabado en una resolución de ${this.resolucionCamara}`)
    }



}

class CelularAltaGama extends Celular{
    constructor(color, peso, resolucionPantalla, resolucionCamara, ram, resolucionCamaraTrasera){
        super(color, peso, resolucionPantalla, resolucionCamara, ram);
        this.resolucionCamaraTrasera = resolucionCamaraTrasera;
    }

        get mostrarDatos(){
            return `<b>Color</b>: ${this.color} <br>
            <b>Peso</b>: ${this.peso} <br>
            <b>RAM</b>: ${this.ram} <br>
            <b>Resolución de Pantalla</b>: ${this.resolucionPantalla} <br>
            <b>Resolución de Cámara</b>: ${this.resolucionCamara} <br>
            <b>Resolución de Cámara Trasera</b>: ${this.resolucionCamaraTrasera} <br><br>`
        }

        grabarCamaraLenta(){
            alert("Estas grabando en cámara lenta");
        }
    
        reconocimientoFacial(){
            alert("Iniciando reconocimiento facial");
        }
        
    }




// -------------------------------------

// Celulares
const celular1 = new Celular("rojo", "100g", "5´", "HD", "1GB");
const celular2 = new Celular("blanco", "110g", "5.4´", "full HD", "2GB");
const celular3 = new Celular("gris", "90g", "5.8´", "full HD", "2GB");

// Celulares de Alta Gama
const celular4 = new CelularAltaGama("negro", "120g", "6´", "4K", "4GB", "full HD");
const celular5 = new CelularAltaGama("blanco", "115g", "6.5´", "4K", "4GB", "HD");

//-------------------------------------

document.write("<h1>Celulares</h1>");
document.write(celular1.mostrarDatos);
document.write(celular2.mostrarDatos);
document.write(celular3.mostrarDatos);

document.write("<hr>")

document.write("<h1>Celulares de Alta Gama</h1>");
document.write(celular4.mostrarDatos);
document.write(celular5.mostrarDatos);

//      FUNCIONALIDADES: 

// celular4.presionarBotonEncendido();
// celular4.tomarFoto();
// celular4.grabarVideo();
// celular4.reconocimientoFacial();
// celular4.grabarCamaraLenta();
// celular4.reiniciar();

