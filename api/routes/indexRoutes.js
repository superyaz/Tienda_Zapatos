const express = require('express');

const app = express();

app.use("/api", require("./usuarioRoutes"));
app.use("/api", require("./productoRoutes"));
app.use("/api", require("./referenciaRoutes"));

module.exports = app;