class Animal{
	constructor(especie, edad, color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}. <br>`;
	}

    mostrarInformacion(){
        document.write(this.info);
    }
}


class Perro extends Animal{
	constructor(especie, edad, raza, color){
		super(especie, edad, color);
		this.raza = raza;
	}

	ladrar(){
		alert("¡WAW!")
	}

	// metodo estático (no necesita que se instancia un objeto perteneciente a la clase para usarse)
    static correr(){
        alert("Corriendo...");
    }

	// Setter
	set setRaza(nueva_raza){
		this.raza = nueva_raza
	}
	
	// Getter
	get getRaza(){
		return this.raza;
	}
}



// Cuando se trabaja con objetos, es recomendable usar const
const perro = new Perro("perro", 5, "marron", "Dobberman");
const gato = new Animal("gato", 2, "negro")
const pajaro = new Animal("pajaro", 1, "gris");

// Perro
perro.mostrarInformacion();
perro.ladrar();
perro.setRaza = "Golden Retriever";
Perro.correr();
document.write(`La raza del perro es:  <b>${perro.getRaza}</b><br>`);

// Gato y Pájaro
gato.mostrarInformacion();
pajaro.mostrarInformacion()

