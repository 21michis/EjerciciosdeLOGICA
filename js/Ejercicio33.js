//4. Clases básicas: Crea una clase Persona con propiedades nombre y edad , y un
//método que salude con el nombre de la persona.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("¡Hola! Mi nombre es " + this.nombre + ".");
    }
}

let persona1 = new Persona("Juan", 25);


persona1.saludar();
