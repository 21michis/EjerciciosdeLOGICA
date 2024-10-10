//2. Funciones y condicionales: Crea una función que reciba un número y
//devuelva true si es par y false si es impar.

function esPar(numero) {
    return numero % 2 === 0;
}

let resultado = esPar(7);
console.log("¿Es par?", resultado);
