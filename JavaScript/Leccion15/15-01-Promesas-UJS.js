let miPromesa = new Promise((resolver, rechazar) => { //2 parámetros de tipo callback
    let expresion = true;
    if(expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
}); 
// miPromesa.then( valor => console.log(valor),  error => console.log(error) );
// miPromesa.then(valor => console.log(valor)).catch(error => console.log(error));


// Proceso asíncrono
let promesa = new Promise ((resolver) => {
    // console.log('Inicio promesa');
    setTimeout(() => resolver('Saludos con promesa y seTimeout'), 3000); //3 segundos
    // console.log('Fin promesa');
});
// promesa.then(valor => console.log(valor));


//Palabra Async - regresa el valor de "resolver" pero de manera simplificada:
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}
// miFuncionConPromesa().then(valor => console.log(valor));


//Async con Await
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise (resolver => {
        resolver ('Promesa con await')
    });
    console.log(await miPromesa);
}

// funcionConPromesaYAwait();


//Promesas + await + async + setTimeout
async function funcionConPromesaAwaitTimeout (){
    console.log('Inicio de función');  //Fuera promesa

    //Inicio Promesa
    let miPromesa = new Promise (resolver => {
        setTimeout (() => resolver ('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
   //Fin promesa

    console.log('Fin de función');  //Fuera promesa
}
//LLamada a la función
funcionConPromesaAwaitTimeout();











