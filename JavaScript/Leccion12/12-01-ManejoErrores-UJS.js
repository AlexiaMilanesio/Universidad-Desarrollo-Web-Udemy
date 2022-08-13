'use strict'

//Declaramos variable numérica
let resultado = -1;

//Comprobaciones: es número? + o - ?
try{
    if (isNaN(resultado)) throw 'No es un número'; //Error
    else if (resultado == '') throw 'Es cadena vacía'; //Error
    else if (resultado >= 0) throw 'Valor positivo'; //No es verdaderamente error, es algo informativo
    else if (resultado < 0) throw 'Valor negativo'; //Idem anterior
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina revisión de errores')
}




