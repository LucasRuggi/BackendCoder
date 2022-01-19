const Contenedor = require("./clases/contenedor");
const bolsa = new Contenedor("productos");

// Producto 1
bolsa
  .save({
    titulo: "Fideos",
    precio: 149,
    img: "https://jumboargentina.vtexassets.com/arquivos/ids/209822/Fideo-Molto-Guiseros-Fideos-Guisero-Molto-500-Gr-1-46224.jpg?v=636383732923400000",
  })
  .then(() =>
    // Producto 2
    bolsa
      .save({
        titulo: "Sal",
        precio: 99,
        img: "https://https://jumboargentina.vtexassets.com/arquivos/ids/538488/Sal-Fina-Celusal-500-Gr-1-41243.jpg?v=636983688434200000.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
      })
      .then(() =>
        // Producto 3
        bolsa.save({
          titulo: "Pure de tomate",
          precio: 300,
          img: "https://walmartar.vteximg.com.br/arquivos/ids/859003-1000-1000/Pure-De-Tomate-La-Campagnola-520-Gr-1-15146.jpg?v=637196546200930000",
        })
      )
  );

// Producto en base al ID
//bolsa.getById(2).then((producto) => console.log(producto));
//bolsa.getById(152).then((producto) => console.log(producto));

// Borrar por ID
//bolsa.deleteById(1).then((producto) => console.log(producto));
//bolsa.deleteById(152).then((producto) => console.log(producto));

// Buscar todos los productos
//bolsa.getAll().then((producto) => console.log(producto));

// Borrar todos los productos
//bolsa.deleteAll().then((producto) => console.log(producto));
