class Persona{
    static contadorPersonas = 0;

    //Constante estática = es llamada a método estático:
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        //Evitar que número máx objetos sea 5
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            //Creamos nuevo atributo idPersona (valor único):
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('Se ha superado el máx de objetos permitidos')
        }
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        //Agregamos valor idPersona
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    } 
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); 
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}
//Objeto de clase padre
let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1.toString());

//Objeto de clase hija
let empleado1 = new Empleado('María', 'Jimenez', 'Sistemas');
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

//Objeto de clase padre
let persona2 = new Persona('Karla', 'Ramírez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);


console.log(Persona.MAX_OBJ);
//Si intentamos modificar su valor:
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ); //No modifica su valor por ser GET y no SET

//Objeto 4
let persona3 = new Persona('Mariano', 'Lara');
//Objeto 5
let persona4 = new Persona('Armando', 'Toledo');
//Objeto 6
let persona5 = new Persona('Laura', 'Quintero');
//Valor undefined del objeto 6 porque ya no fueron asignados 
console.log(persona5.toString());






