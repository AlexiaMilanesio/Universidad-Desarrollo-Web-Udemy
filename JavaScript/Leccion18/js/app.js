//Comprobamos el funcionamiento de la asociación de los archivos html y js:
console.log('Aplicación Calculador');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    // Mandamos algo a la consola para comprobar que este funcionando correctamente ahí también:
    console.log(`Resultado: ${resultado}`);
}