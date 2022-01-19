const fs = require("fs");

class Contenedor {
  constructor(file) {
    this.url = "./files/";
    this._archivo = `${file}.txt`;
  }

  async save(object) {
    // Recibe un objeto, lo guarda en el _archivo, devuelve el id asignado.
    try {
      let res = await fs.promises.readFile(
        `${this.url}${this._archivo}`,
        "utf-8"
      );
      let productos = JSON.parse(res);
      const producto = {
        id: productos[productos.length - 1].id + 1,
        titulo: object.titulo,
        precio: object.precio,
        img: object.img,
      };
      productos.push(producto);
      try {
        await fs.promises.writeFile(
          `${this.url}${this._archivo}`,
          JSON.stringify(productos, null, 2)
        );
        return {
          status: "Success",
          message: "Producto creado con éxito.",
          id: producto.id,
        };
      } catch (err) {
        return {
          status: "Error",
          message: "Error al cargar el producto.",
          error: err,
        };
      }
    } catch (err) {
      const producto = {
        id: 1,
        titulo: object.titulo,
        precio: object.precio,
        img: object.img,
      };
      try {
        await fs.promises.writeFile(
          `${this.url}${this._archivo}`,
          JSON.stringify([producto], null, 2)
        );
        return {
          status: "Success",
          message: "_archivo y producto creado con éxito.",
          id: producto.id,
        };
      } catch (err) {
        return {
          status: "Error",
          message: "Error al crear el _archivo y producto.",
          error: err,
        };
      }
    }
  }

  async getById(id) {
    // Recibe un id y devuelve el objeto con ese id, o null si no está.
    try {
      let res = await fs.promises.readFile(
        `${this.url}${this._archivo}`,
        "utf-8"
      );
      let productos = JSON.parse(res);
      let producto = productos.find((el) => el.id === id);
      if (!producto) {
        throw new Error();
      }
      return producto;
    } catch (err) {
      return {
        status: "Error",
        message: "No se encontro el producto solicitado.",
        error: err,
      };
    }
  }

  async getAll() {
    // Devuelve un array con los objetos presentes en el _archivo.
    try {
      let res = await fs.promises.readFile(
        `${this.url}${this._archivo}`,
        "utf-8"
      );
      let productos = JSON.parse(res);
      return productos;
    } catch (err) {
      return {
        status: "Error",
        message: "No se encontro el producto solicitado.",
      };
    }
  }

  async deleteById(id) {
    // Elimina del _archivo el objeto con el id buscado.
    try {
      let res = await fs.promises.readFile(
        `${this.url}${this._archivo}`,
        "utf-8"
      );
      let productos = JSON.parse(res);
      let siExiste = productos.find((el) => el.id === id);
      if (!siExiste) {
        throw new Error();
      }
      let productosActualizados = productos.filter((el) => el.id !== id);
      try {
        await fs.promises.writeFile(
          `${this.url}${this._archivo}`,
          JSON.stringify(productosActualizados, null, 2)
        );
        return { status: "Success", message: "Producto eliminado con éxito." };
      } catch (err) {
        return {
          status: "Error",
          message: "Hubo un problema al borrar el producto.",
        };
      }
    } catch (err) {
      return {
        status: "Error",
        message: "No se encontro el producto solicitado.",
      };
    }
  }

  async deleteAll() {
    // Elimina todos los objetos presentes en el _archivo..
    try {
      await fs.promises.unlink(`${this.url}${this._archivo}`);
      return {
        status: "Success",
        message: "Se eliminaron todos los objetos del _archivo.",
      };
    } catch (err) {
      return {
        status: "Error",
        message: "Hubo un error al intentar borrar los _archivos.",
        error: err,
      };
    }
  }
}

module.exports = Contenedor;
