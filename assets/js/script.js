// Importar las clases correctamente
import { Propietario, Animal, Mascota } from "./modulo/paciente.js";

function AgregarDatos() {
  // Obtener valores de los campos del formulario
  let propietario = document.getElementById("propietario").value;
  let telefono = document.getElementById("telefono").value;
  let direccion = document.getElementById("direccion").value;
  let nombreMascota = document.getElementById("nombreMascota").value;
  let tipo = document.getElementById("tipo").value;
  let enfermedad = document.getElementById("enfermedad").value;

  let patron = /^[0-9]+$/;
  if (
    propietario == "" ||
    telefono == "" ||
    direccion == "" ||
    nombreMascota == "" ||
    tipo == "" ||
    enfermedad == ""
  ) {
    alert("Por favor rellene todos los campos");
    return;
  }

  if (telefono != "" && telefono.length != 9) {
    alert("Por favor ingrese un numero de telefono valido");
  }
  // Crear instancias de las clase Mascota que Hereda todos los atributos y metodos
  let MascotaPaciente = new Mascota(
    propietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  );

  // Mostrar los datos en el HTML
  MostrarMascotaPaciente(MascotaPaciente);

  // Limpiar el formulario
  document.getElementById("propietario").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("direccion").value = "";
  document.getElementById("nombreMascota").value = "";
  document.getElementById("tipo").value = "";
  document.getElementById("enfermedad").value = "";
}

let formulario = document.getElementById("formulario");

function MostrarMascotaPaciente(fichaMascotaPaciente) {
  // Mostrar los datos en el HTML
  let DatosMascotaPaciente = document.getElementById("resultado");
  DatosMascotaPaciente.innerHTML =
    fichaMascotaPaciente.DatosPropietario() +
    fichaMascotaPaciente.tipo +
    fichaMascotaPaciente.nombreMascota +
    fichaMascotaPaciente.enfermedad;
  console.log(fichaMascotaPaciente);
}

formulario.addEventListener("submit", function (CuandoEjecutaEvento) {
  CuandoEjecutaEvento.preventDefault();
  AgregarDatos();
});
