require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://superyaz:yaz.456@cluster0-ypqzo.mongodb.net/zpatos_superyaz?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });

mongoose.connect('mongodb+srv://superyaz:yaz.456@cluster0-ypqzo.mongodb.net/zpatos_superyaz?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(db => console.log(`DB is connect`))
    .catch(err => console.log(err));

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

//mongoose.connect('mongodb+srv://superyaz:yaz.456@cluster0-ypqzo.mongodb.net/zpatos_superyaz?retryWrites=true&w=majority', { useNewUrlParser: true });

app.listen(process.env.PORT, () => console.log(`Example app listening on port port! ${port}`));