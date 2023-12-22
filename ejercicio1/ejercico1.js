'use strict';

function GetStudent(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validarP = function() {
        if (this.promedio >= 70) {
            return "Aprobado";
        } else { 
            return "Reprobado";
        }
    };
    
    this.obtenerU = function() {
    let pos = studentOne.correo.indexOf("@");
    let usuario = studentOne.correo.slice(0, pos);
    return usuario;
}
}

let studentOne = new GetStudent("Diego Gabriel", "dgpulgarin@gmail.com", 80);

alert(studentOne.validarP());

alert(studentOne.obtenerU());






