/* Cofla ya tiene su nuevo cleular y ahora está mirando las aplicaciones del Play Store ya que quiere
jugar juegos que sean muy populares, que tengan una buena puntiación y que pesen pocom pero las 7 apps que llamaron
su atención son un tanto similares y sabe que si se descarga todas, probablemente juegue con todas, pero
él se va a descargar solo 2 para tener perdidas innecesarias de tiempo jugando juegos con su celular, pero el problema 
viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a descargar.

- Crear un sistema que ayude a Cofla a decidir cual app descargar.
- La información de los instaladores debe contener la cantidad de descargas, la puntuación y el peso. 
- Las apps se deben poder instalar, abrir, cerrar y desinstalar*/

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso
        this.instalada = false;
        this.abrierta = false;
    }

    instalar(){
        if(this.instalada == false){
            alert("Aplicación Instalada");
            this.instalada = true;
        }else{
            alert("La aplicación ya está instalada");
        }
    }

    desinstalar(){
        if(this.instalada == true){
            alert("Aplicación Desinstalada");
            this.instalada = false;
        }else{
            alert("La aplicación no se encuentra instalada");
        }
    }

    abrir(){
        if(this.instalada == true){
            if(this.abrierta == false){
                alert("Aplicación Abierta");
                this.abrierta = true;
            }else{
                alert("La aplicación ya está abierta");
            }
        }else{
            alert("La aplicación no está instalada");
        }
    }

    cerrar(){

        if(this.instalada == true){
            if(this.abrierta == true){
                alert("Aplicación Cerrada");
                this.abrierta = false;
            }else{
                alert("La aplicación ya está cerrada");
            }
        }else{
            alert("La aplicación no está instalada");
        }
    }
        
    mostrarInformacion(){
        document.write(`<b>Cantidad de Descargas:</b> ${this.descargas} <br>
                        <b>Puntuación:</b> ${this.puntuacion} estrellas <br>
                        <b>Peso:</b> ${this.peso} <br><br>`);
    }

}


const app1 = new App(500, "3.0", "400MB");
const app2 = new App(10000, "4.5", "1GB");
const app3 = new App(8000, "3.5", "200MB");
const app4 = new App(200, "3.5", "200MB");
const app5 = new App(100000, "5", "1.5GB");
const app6 = new App(300000, "4.0", "2GB");
const app7 = new App(100, "2.2", "250MB");


app1.mostrarInformacion();
app2.mostrarInformacion();
app3.mostrarInformacion();
app4.mostrarInformacion();
app5.mostrarInformacion();
app6.mostrarInformacion();
app7.mostrarInformacion();


// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();
// app1.abrir();