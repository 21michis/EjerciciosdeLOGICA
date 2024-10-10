//2. Suma de elementos de un array: Crea un programa que sume todos los
//números de un array.


let numeros = [3, 5, 7, 2, 8];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma de los elementos del array es:", suma);
