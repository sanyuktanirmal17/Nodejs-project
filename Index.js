const express = require('express')
const db = require('./Queries')
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express()
const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors(corsOptions));
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  var corsOptions = {
    origin: "http://localhost:3000"
  };

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

 
app.get('/sampletable', db.getUsers)
app.get('/sampletable/:id', db.getUserById)
app.post('/sampletable', db.createUser)
app.put('/sampletable/:id', db.updateUser)
app.delete('/sampleTable/:id', db.deleteUser)

// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

