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

Object.defineProperty(this,'_getEdad',{
    get: function(){
        return _edad;
    }
});

Object.defineProperty(this,'_setEdad', {
    set: function(edad){
        _edad = edad;
    }
});

Object.defineProperty(this,'_getRut',{
    get: function(){
        return _rut;
    }
});

Object.defineProperty(this,'_setRut', {
    set: function(rut){
        _rut = rut;
    }
});

Object.defineProperty(this,'_getDiagnostico',{
    get: function(){
        return _diagnostico;
    }
});

Object.defineProperty(this,'_setDiagnostico', {
    set: function(diagnostico){
        _diagnostico = diagnostico;
    }
});

// Getters And Setters

Paciente.prototype.getNombre = function(){
    return this._getNombre;
}

Paciente.prototype.setNombre = function(nombre){
    return this._setNombre = nombre;
}

Paciente.prototype.getEdad = function(){
    return this._getEdad;
}

Paciente.prototype.setEdad = function(edad){
    return this._setEdad = edad;
}

Paciente.prototype.getRut = function(){
    return this._getRut;
}

Paciente.prototype.setRut = function(rut){
    return this._setRut = rut;
}

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
}

Paciente.prototype.setDiagnostico = function(diagnostico){
    return this._setDiagnostico = diagnostico;
}








