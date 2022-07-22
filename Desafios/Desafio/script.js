/*let paciente = prompt("Ingrese apellido de su paciente: (presiobe S o Q - para salir)");

while(paciente != "s") {
    switch(paciente){
        case "Perez":
            alert("Perez tiene turno a las 14hs");
            break;
        case "Fernandez":
            alert("Fernandez tiene turno 14:30hs");
            break;
        case "Florentin":
            alert("Florentin tiene turno a las  17hs");
            break;
        default:
            alert("No se encontro paciente");
            break;
    }
    paciente = prompt("Ingrese apellido de su paciente: (presiobe S o Q - para salir)");
}*/

let numero = parseInt(prompt("Ingrese un numero entre 0 al 10: "));
let multiplicacion;

while (numero <= 10) {
    for (let i = 0; i <= 10; i++) {
        multiplicacion = numero * i;
        console.log(multiplicacion);
    }
    numero = parseInt(prompt("Ingrese un numero entre 0 al 10: "));
}








