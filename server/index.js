const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();
const mysql = require('mysql2');
const db = require('../database/index.js')

//creat connection to db
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cows'
})

app.use(express.static(path.join(__dirname, '..', 'public')));
//body parser
app.use(express.json());



//routes
app.get('/api/cows', (req, res) => {
  db.queryCowList((err, results) => {
    if (err) {
      console.log(err)
    } else {
      res.send(results)
    }
  })
})

app.post('/api/cows', (req, res) => {
  console.log('post req here!')
  connection.query(`INSERT INTO cowList(name, description) VALUES('${req.body.name}', '${req.body.description}')`), (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log('successPOST')
      res.send(results)
    }
  }
})



app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
