//Simular reloj
//Función que se llamará cada segundo: extraerá hora, minuto y segundo de la fecha actual
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
}

setInterval(reloj, 1000); //Se llamará cada 1 segundo el método reloj




