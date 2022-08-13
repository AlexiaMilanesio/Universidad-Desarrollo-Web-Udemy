let mes = 4;
let estacion = "Estación desconocida";

switch (mes){
    case 1: case 2: case 3:
        estacion = "Invierno";
        break;
    case 4: case 5: case 6:
        estacion = "Primavera";
        break;
    case 7: case 8: case 9:
        estacion = "Verano";
        break;
    case 10: case 11: case 12:
        estacion = "Otoño";
        break;
    default:
        estacion = "Valor incorrecto";
}
console.log(estacion);



