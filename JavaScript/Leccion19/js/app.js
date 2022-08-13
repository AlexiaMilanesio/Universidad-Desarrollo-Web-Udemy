// Comprobación conectividad con archivo HTML:
// console.log('Listado de Personas');

// Declaramos un arreglo de objetos de tipo persona de manera inicial, fuera de cualquier función:
const personas = [
    new Persona('Diego', 'Pierobon'),
    new Persona('Alexía', 'Milanesio')
];

function mostrarPersonas(){
    // Comprobamos funcionamiento correcto consola
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        // Comprobar funcionamiento correcto consola
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    // Podemos usar getElementById o hacerlo de esta forma usando "forms":
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    // Validación para que no se puedan agregar objetos vacíos: (mandamos mensaje a la consola)
    if(nombre.value != '' && apellido.value != ''){
        // Creamos nuevo objeto de tipo Persona: le pasamos la info del nombre y apellido pero para acceder al valor debemos poner .value para ambos casos
        const persona = new Persona(nombre.value, apellido.value);
        // Mandamos a consola el nuevo objeto de tipo Persona:
        console.log(persona);
        // Y también lo agregamos al arreglo "personas" que definimos al principio:
        personas.push(persona);
        // Volver a mostrar todo el arreglo:
        mostrarPersonas();
    }
    else{
        console.log('No hay información que agregar');
    }
}




