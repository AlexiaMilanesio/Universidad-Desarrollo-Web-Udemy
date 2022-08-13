//Clase padre
class Persona{
    //Atributo estático que se asocia a la clase/plantilla en sí misma:
    static contadorObjetosPersona = 0;

    //Atributo que se asocia con objetos y no con la clase:
    email = 'Valor default email';

    //Cada vez que creemos un nuevo objeto, incrementaremos la variable anterior:
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log('Se incrementa contador: ' + Persona.contadorObjetosPersona);
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
    //Nuevo método diferente a get y set:
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    } 
    //Sobreescritura toString de clase padre object:
    toString(){
        //Aplicación polimorfismo:
         return this.nombreCompleto();
    }
    //Método static:
    static saludar(){
        console.log('saludos desde método static');
    }
    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}

//Clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        //LLamar al constructor clase padre:
        super(nombre, apellido); 
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura del método nombreCompleto:
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

//Crear objeto de clase padre
let persona1 = new Persona('Juan', 'Pérez');
console.log(persona1.toString());

//Crear segundo objeto de clase hija
let empleado1 = new Empleado('María', 'Jimenez', 'Sistemas');
console.log(empleado1);
//Podemos acceder al atributo nombreCompleto de clase padre desde la clase hija:
console.log(empleado1.nombreCompleto());
//Lo que visualizaremos en el navegador web:
console.log(empleado1.toString());

//Llamar método static de objeto persona1:
//persona1.saludar();
//LLamar método static desde la clase Persona:
Persona.saludar();
//Desde clase Persona llamamos método static saludar2 y le pasamos argumento persona1 (Juan Pérez):
Persona.saludar2(persona1);
//Se hereda el método static a la clase hija:
Empleado.saludar();
Empleado.saludar2(empleado1);

//Utilizar atributo estático:
console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);
//Utilizar atributo estático desde clase hija:
console.log(Empleado.contadorObjetosPersona);

//Acceder a atributo non-static: email 
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);













