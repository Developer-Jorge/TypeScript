class Persona {
    private nombre:string;
    constructor (_nombre:string){
        this.nombre = _nombre
    }
    cualEsElNombre():string{
        return this.nombre;
    }
    modificarNombre(_nuevoNombre:string){
        this.nombre = _nuevoNombre
    }
}

let persona = new Persona("Beto")
console.log(persona.cualEsElNombre())
persona.modificarNombre("Carlos")
console.log(persona.cualEsElNombre())