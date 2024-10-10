//5. Comparaciones: Escribe un programa que compare dos números y diga cuál
//es mayor o si son iguales.

let numero1 = parseFloat(prompt("Por favor ingrese el primer numero:"));
let numero2 = parseFloat(prompt("Por favor ingrese el segun numero:"));

if (numero1 > numero2 ) {
    console.log("numero1 es mayor a numero2 ");
  } else if (numero2 > numero1 ) {
    console.log("numero2 es mayor a numero1 ");
  } else {
    console.log ("Son iguales")
  }
