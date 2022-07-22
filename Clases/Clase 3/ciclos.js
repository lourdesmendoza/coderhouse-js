// Ciclo por conteo

/******************** */
//FOR
/******************** */

/*for (let i = 1; i < 6; i++) {
    console.log("Hola coders, ciclo " + i);
}*/

// Tablas de multiplicacion

/*let number = prompt("Ingrese un numero: ");

for(let i = 0; i <= 10; i++){
    let result = number * i;
    console.log(number + "x" + i + "=" + result);
}*/

// Sentencia break
/* for(let i = 1; i <= 3; i++) {
    let password = prompt("Ingrese contraseña: ");
    if (password === "contraseña123") {
        console.log("Ingresó con exito");
        break;
    } else {
        console.log("Ingrese nuevamente contraseña");
    }
}*/


/******************** */
//WHILE
/******************** */

/* let oracion = "";
let palabra = prompt("Ingrese una palabra para armar una oracion (s-salir del juego)");

while(palabra!="s"){
    oracion = oracion + " " + palabra;
    palabra = prompt("Ingresa otra palabra para arma la oracion (s-salir del juego)");
}

alert ("la oracion formada es: " + oracion); */



/******************** */
// DO WHILE
/******************** */

/*let number = 0;
// do...while hacer... mientras(estosecumpla)
do {
    //Repetimos con do...while mientreas el usuario ingresa un numero
    numero = prompt("Ingresar numero: ");
    console.log(numero);
    //Si el parseo no resulta un numero se interrumpe el bucle
} while (parseInt(numero))*/

/******************** */
//SWITCH
/******************** */

let product = prompt("Ingrese el producto y te dire el precio: ");
let precio = 0; //Inicializamos en 0 porque es un acumulador

while(product != "s"){
    switch(product){
        case "yerba":
            console.log("La yerba sale 450");
            precio=precio+450;
            break;
        case "azucar":
            console.log("La azucar vale $90");
            precio=precio+90;
            break;
        case "fideos":
            console.log("Los fideos salen $175");
            precio = precio+175;
            break;
        case "te":
            console.log("El te sale $200");
            precio = precio+200;
            break;
        default:
            console.log("Ese producto no esta en stock");
            break;
    }
    product = prompt("Ingrese el producto y te dire el precio: ");
}
console.log('Total a pagar', precio);



