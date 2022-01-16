const Contenedor = require("./clases/contenedor");
const carrito = new Contenedor("productos");

// Producto 1
carrito
  .save({
    titulo: "Fideos",
    precio: 149,
    img: "https://jumboargentina.vtexassets.com/arquivos/ids/209822/Fideo-Molto-Guiseros-Fideos-Guisero-Molto-500-Gr-1-46224.jpg?v=636383732923400000",
  })
  .then(() =>
    // Producto 2
    carrito
      .save({
        titulo: "Sal",
        precio: 99,
        img: "https://https://jumboargentina.vtexassets.com/arquivos/ids/538488/Sal-Fina-Celusal-500-Gr-1-41243.jpg?v=636983688434200000.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      })
      .then(() =>
        // Producto 3
        carrito.save({
          titulo: "Pure de tomate",
          precio: 300,
          img: "https://walmartar.vteximg.com.br/arquivos/ids/859003-1000-1000/Pure-De-Tomate-La-Campagnola-520-Gr-1-15146.jpg?v=637196546200930000",
        })
      )
  );

// Producto en base al ID
carrito.getById(2).then((data) => console.log(data));
carrito.getById(152).then((data) => console.log(data));

// Borrar por ID
carrito.deleteById(1).then((data) => console.log(data));
carrito.deleteById(152).then((data) => console.log(data));

// Buscar todos los productos
carrito.getAll().then((data) => console.log(data));

// Borrar todos los productos
carrito.deleteAll().then((data) => console.log(data));
