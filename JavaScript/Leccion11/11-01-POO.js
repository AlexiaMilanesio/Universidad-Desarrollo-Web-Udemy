class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre (nombre){
        return this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo (sueldo){
        return this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento (departamento){
        return this._departamento = departamento;
    }   
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, departamento: ${this._departamento}`;
    }
}

//Método independiente
function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles()); //Método "genérico" - Polimorfismo
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo hijo (Gerente)');
        console.log(tipo.departamento);
    }
    if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo padre (Empleado)');
        console.log(tipo.departamento);
    }
    if(tipo instanceof Object){
        console.log('Es un tipo Object');
    }
}

let empleado1 = new Empleado ('Diego Milanesio', 3000);
let gerente1 = new Gerente ('Alexía Milanesio', 5000, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);



