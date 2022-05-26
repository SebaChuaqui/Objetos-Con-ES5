// Función Constructora Consultorio

function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes || [];
}

// Función Constructora Paciente

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, '_getNombre', {
        get: function () {
            return _nombre;
        }
    });
    
    Object.defineProperty(this, '_setNombre', {
        set: function (nombre) {
            _nombre = nombre;
        }
    });
    
    Object.defineProperty(this, '_getEdad', {
        get: function () {
            return _edad;
        }
    });
    
    Object.defineProperty(this, '_setEdad', {
        set: function (edad) {
            _edad = edad;
        }
    });
    
    Object.defineProperty(this, '_getRut', {
        get: function () {
            return _rut;
        }
    });
    
    Object.defineProperty(this, '_setRut', {
        set: function (rut) {
            _rut = rut;
        }
    });
    
    Object.defineProperty(this, '_getDiagnostico', {
        get: function () {
            return _diagnostico;
        }
    });
    
    Object.defineProperty(this, '_setDiagnostico', {
        set: function (diagnostico) {
            _diagnostico = diagnostico;
        }
    });
    
}

// Métodos Object DefineProperty


// Getters And Setters

Paciente.prototype.getNombre = function () {
    return this._getNombre;
}

Paciente.prototype.setNombre = function (nombre) {
    return this._setNombre = nombre;
}

Paciente.prototype.getEdad = function () {
    return this._getEdad;
}

Paciente.prototype.setEdad = function (edad) {
    return this._setEdad = edad;
}

Paciente.prototype.getRut = function () {
    return this._getRut;
}

Paciente.prototype.setRut = function (rut) {
    return this._setRut = rut;
}

Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
}

Paciente.prototype.setDiagnostico = function (diagnostico) {
    return this._setDiagnostico = diagnostico;
}

// Método para mostrar los pacientes y su información

Consultorio.prototype.mostrarPacientes = function () {
    console.log('Todos los Pacientes del Consultorio: ');
    document.write(' <b> Todos los Pacientes del Consultorio: <b>');

    // Ciclo FOR para recorrer el arreglo e imprimir la información por consola

    for (var i = 0; i < this.pacientes.length; i++) {
        console.log('Nombre: ' + this.pacientes[i].getNombre() + ' / ' + 'Edad: ' + this.pacientes[i].getEdad() + ' / ' + 'Rut: ' + this.pacientes[i].getRut() + ' / ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico());
        document.write('<hr> Nombre: </hr> ' + this.pacientes[i].getNombre() + ' / ' + 'Edad: ' + this.pacientes[i].getEdad() + ' / ' + 'Rut: ' + this.pacientes[i].getRut() + ' / ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico());
    }
}

// Método para buscar la información de los pacientes por nombre

Consultorio.prototype.buscarInfoxNombre = function (nombre) {

    // Ciclo FOR

    for (var i = 0; i < this.pacientes.length; i++) {
        if (nombre == this.pacientes[i].getNombre()) {
            console.log('Buscar información del paciente por nombre: ' + this.pacientes[i].getNombre());
            document.write('<hr> Buscar información del paciente por nombre: </hr>' + this.pacientes[i].getNombre());
            console.log('Nombre: ' + this.pacientes[i].getNombre() + ' / ' + 'Edad: ' + this.pacientes[i].getEdad() + ' / ' + 'Rut: ' + this.pacientes[i].getRut() + ' / ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico());
            document.write('<hr> Nombre: </hr> ' + this.pacientes[i].getNombre() + ' / ' + 'Edad: ' + this.pacientes[i].getEdad() + ' / ' + 'Rut: ' + this.pacientes[i].getRut() + ' / ' + 'Diagnóstico: ' + this.pacientes[i].getDiagnostico());
        }
    }

}

var paciente1 = new Paciente('Juan', 55, '14.346.722-8', "Hipotiroidismo");
var paciente2 = new Paciente('Rosa', 44, '18.126.790-3', "Cancer de Mama");
var paciente3 = new Paciente('Monica', 49, '15.378.325-1',"Hipertensión" );
var paciente4 = new Paciente('Pedro', 64, '9.029.367-4', "Insuficiencia Cardíaca");
var paciente5 = new Paciente('Luisa', 58, '11.320.928-4', "Cancer de Tiroides");
var consultorio1 = new Consultorio('Consultorio Simpsonito', [paciente1, paciente2, paciente3, paciente4, paciente5]);

consultorio1.mostrarPacientes();
consultorio1.buscarInfoxNombre('Monica');
consultorio1.buscarInfoxNombre('Luisa');




