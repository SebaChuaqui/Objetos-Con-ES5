// Función Constructora Consultorio

function Consultorio(nombre, pacientes){
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

// Función Constructora Paciente

function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico; 
}

// Métodos Object DefineProperty

Object.defineProperty(this,'_getNombre',{
    get: function(){
        return _nombre;
    }
});

Object.defineProperty(this,'_setNombre', {
    set: function(nombre){
        _nombre = nombre;
    }
});

