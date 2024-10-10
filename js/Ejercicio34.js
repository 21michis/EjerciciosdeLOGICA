//5. Herencia: Crea una clase Estudiante que herede de Persona y agregue la
//propiedad grado . Agrega un método para imprimir el grado.


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

  
    saludar() {
        console.log("¡Hola! Mi nombre es " + this.nombre + ".");
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }


    mostrarGrado() {
        console.log("Estoy en el grado " + this.grado + ".");
    }
}

let estudiante1 = new Estudiante("María", 20, "10º");

estudiante1.saludar();
estudiante1.mostrarGrado();
