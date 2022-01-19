const express = require("express");
const app = express();
const PORT = 8080;
const Contenedor = require("./clases/contenedor");
const contenedor = new Contenedor("productos");

const server = app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});

server.on("error", (error) => {
  console.log(error);
});

app.get("/", (req, res, next) => {
  res.send("Hola");
});

app.get("/productos", (req, res, next) => {
  contenedor.getAll().then((x) => res.json(x));
});

app.get("/productoRandom", (req, res, next) => {
  let numRandom = Math.floor(Math.random() * (4 - 1) + 1);
  contenedor.getById(numRandom).then((x) => res.json(x));
});
