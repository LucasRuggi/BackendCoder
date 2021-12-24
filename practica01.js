class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  getFullName() {
    return `El nombre es ${this.nombre} ${this.apellido}`;
  }
  addMascota(newMascota) {
    this.mascotas.push(newMascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }

  addBook(nombre, autor) {
    let newLibro = {
      nombre: nombre,
      autor: autor,
    };
    return this.libros.push(newLibro);
  }

  getBookNames() {
    return this.libros.forEach((x) => {
      console.log(x.nombre);
    });
  }
}

let primerUsuario = new Usuario(
  "Lucas",
  "Rushi",
  [
    { nombre: "Harry1", autor: "LaMejor1" },
    { nombre: "Harry2", autor: "LaMejor2" },
  ],
  ["Perro", "Gato"]
);

console.log(primerUsuario.getFullName());
primerUsuario.addMascota("Tortuga");
console.log(primerUsuario.countMascotas());
primerUsuario.addBook("Harry3", "LaMejor3");
console.log(primerUsuario);
primerUsuario.getBookNames();
