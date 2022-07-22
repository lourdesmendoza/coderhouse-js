// CONDICIONALES

// Condicional simple
// IF

// let saborHelado = prompt("Ingrese su sabor favorito de helado: ");

/* if (saborHelado === 'Chocolate') {
    console.log("Felicidades usted gano 1kg de helado");
} else {
    console.log("Siga participando");
} */

// ejercicio
// Preguntar al usuario el año de su coche, si el vehiculo tiene menos de 10 años de antiguedad le decimos que abona 200usd de patente. Sino abona solo 100usd

let anioActual = 2022;
let anioUserVehiculo = parseInt(prompt("Ingrese el año de su patente: "));
let anioVehiculo = anioActual - anioUserVehiculo;

console.log(anioVehiculo);
if (anioVehiculo < 10) {
    console.log("usted debe abonar 200usd por su patente");
} else {
    console.log("Usted debe abonar 100usd de patente");
}

// Booleanos

let edadUser = parseInt(prompt("Ingrese su edad: "));

if(edadUser >= 18) {
    console.log("Usted es mayor de edad");
} else {
    console.log("Usted es menor de edad");
}

