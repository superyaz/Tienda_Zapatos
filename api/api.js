require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yacamo:yaz.456@cluster0-trace.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then(db => console.log('DB is connect'))
.catch(err => console.log(err));


const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = 3000;

/**
 * Requiero las rutas desde el archivo index ubicado en ./routes
 */

app.use(require("./routes/indexRoutes"));

app.get('/', (req, res) => res.send('Bienvenido a mi APP para zapatos'));


app.listen(process.env.PORT, () => console.log(`Example app listening on port port! ${port}`));