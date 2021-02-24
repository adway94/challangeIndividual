const express = require("express");
const app = express();

//const apiRoutes = require("./routes/apiRoutes");

const { urlencoded } = require("body-parser");
const port = process.env.PORT ? process.env.PORT : 3000;

// Manejo de parmetros url y json
app.use(urlencoded());
app.use(express.json());

require("./db");

// Prueba de servidor en index
app.get("/", (req, res) => {
  res.send("Im alive at port " + port);
});

// Agregamos rutas API
//app.use(apiRoutes);

// Escucha puerto
app.listen(port, () => {
  console.log("Im alive at port: " + port);
});
