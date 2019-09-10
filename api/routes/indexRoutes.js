const express = require('express');

const app = express();

app.use(require("./usuarioRoutes"));
app.use(require("./productoRoutes"));
app.use(require("./referenciaRoutes"));

module.exports = app;