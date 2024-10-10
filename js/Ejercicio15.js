//5. Validación de entrada: Pide al usuario que ingrese un número y verifica si es
//realmente un número. Si no lo es, muestra un mensaje de error.

let entrada = prompt("Por favor, ingresa un número:");

let numero = parseFloat(entrada);

if (isNaN(numero)) {
    console.log("Error: No ingresaste un número válido.");
} else {
    console.log("Gracias. Has ingresado el número: " + numero);
}
