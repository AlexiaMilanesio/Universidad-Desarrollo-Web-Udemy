// Fuera de cualquier función: (tenemos estos elementos (objetos) iniciales)
const ingresos = [
    new Ingreso('Sueldo', 2100.00),
    new Ingreso('Venta coche', 1500),
    // new Ingreso('Nuevo ingreso', 100)
]; 

// Dato: lo que es constante es la referencia de este arreglo, pero internamente podemos modificar cada uno de los elementos.
// Es un arreglo y el contenido del arreglo puede modificarse. Lo que no puede modificarse es la referencia que almacena esta variable.
const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400),
    // new Egreso('Nuevo egreso', 300)
];

// Argegamos id en documento HTML

// Función del evento onload que aplicamos al <body>
let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

// Calcular total de ingresos y egresos:
let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

// Función del evento onload que aplicamos al <body>
let cargarCabecero = ()=>{
    // Calculo del total del presupuesto
    let presupuesto = totalIngresos() - totalEgresos();
    // Calculo porcentaje de egresos sobre ingresos
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    // Recuperamos los elementos:
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

// Aplicamos formato moneda y porcentaje:
const formatoMoneda = (valor)=>{
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}

// Funciones para procesar el listado ingresos - generarlos dinámicamente:
const cargarIngresos = ()=>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

// Por cada ingreso que se agregue se creará el siguiente código HTML
const crearIngresoHTML = (ingreso)=>{
    let ingresosHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return ingresosHTML;
}

// Función para eliminar ingreso
const eliminarIngreso = (id)=>{
    let indiceEliminar = ingresos.findIndex(ingreso => {ingreso.id === id});
    // La línea superior es muy similar a: for(let ingreso of ingresos)
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

// Funciones para procesar el listado egresos - generarlos dinámicamente:
const cargarEgresos = ()=>{
    let egresosHTML = '';
    for(let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

// Por cada egreso que se agregue se creará el siguiente código HTML
const crearEgresoHTML = (egreso)=>{
    let egresosHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick="eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
        </div>
    </div>
</div>
    `;
    return egresosHTML;
}

// Función para eliminar egreso
const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => {egreso.id === id});
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

// Función formulario
let agregarDato = ()=>{
    let forma = document.forms['forma'];
    // Preguntamos cuál es el tipo select que seleccionó el usuario?
    let tipo = forma['tipo'];
    // Recuperamos el resto de los elementos:
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if(descripcion.value !== '' && valor.value !== ''){
        if(tipo.value === 'ingreso'){
            // Si es ingreso, creamos un nuevo objeto de tipo ingreso
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value))); //+valor.value = sería la forma de convertir un string a un number de manera más simplificada
            cargarCabecero();
            cargarIngresos();
        }
            // Si es egreso, en cambio, creamos un nuevo objeto de tipo egreso
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}