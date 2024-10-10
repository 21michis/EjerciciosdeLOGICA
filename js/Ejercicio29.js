//6. Contar vocales: Crea una función que cuente cuántas vocales hay en una
//palabra.

function contarVocales(palabra) {

    let palabraMinusculas = palabra.toLowerCase();
    let contador = 0;
    
    const vocales = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < palabraMinusculas.length; i++) {
        if (vocales.includes(palabraMinusculas[i])) {
            contador++;
        }
    }

    return contador;
}

let palabra = "Educación";
console.log("La palabra '" + palabra + "' tiene", contarVocales(palabra), "vocales.");

