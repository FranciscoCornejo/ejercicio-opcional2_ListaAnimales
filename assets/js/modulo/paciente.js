class Propietario {
  constructor(nombrePropietario, direccion, telefono) {
    this.nombrePropietario = nombrePropietario;
    this.direccion = direccion;
    this.telefono = telefono;
  }

  DatosPropietario() {
    return `<li>El nombre del dueño es: ${this.nombrePropietario}, su direccion es: ${this.direccion} y su numero de telefono es: ${this.telefono}</li><br>`;
  }
}

class Animal extends Propietario {
  constructor(nombrePropietario, direccion, telefono, tipo) {
    super(nombrePropietario, direccion, telefono);
    this._tipo = tipo;
  }

  get tipo() {
    return `<li>El tipo de animal es: ${this._tipo}`;
  }
}

class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  ) {
    super(nombrePropietario, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return `, su nombre es: ${this._nombreMascota}`;
  }

  set nombreMascota(nombreMascota) {
    this._nombreMascota = nombreMascota;
  }

  get enfermedad() {
    return ` y el motivo de la consulta es: ${this._enfermedad}</li> <br>`;
  }

  set enfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}

export { Propietario, Animal, Mascota };
