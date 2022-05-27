const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const connectionString = 'mongodb+srv://emares17:Bng313428@star-wars-cluster.x8bctbo.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('star-wars-quotes');

    app.use(bodyParser.urlencoded({ extended: true }))

    app.listen(3000, function() {
        console.log('Listening on 3000')
    });

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

    app.post('/quotes', (req, res) => {
        console.log(req.body);
    });
  })
  .catch(error => console.error(error))


//   CRUD-CREATE (CONTINUED)