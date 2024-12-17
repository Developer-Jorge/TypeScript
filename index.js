"use strict";
class Persona {
    constructor(_nombre) {
        this.nombre = _nombre;
    }
    cualEsElNombre() {
        return this.nombre;
    }
    modificarNombre(_nuevoNombre) {
        this.nombre = _nuevoNombre;
    }
}
let persona = new Persona("Beto");
console.log(persona.cualEsElNombre());
persona.modificarNombre("Carlos");
console.log(persona.cualEsElNombre());
