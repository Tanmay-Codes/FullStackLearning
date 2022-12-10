const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 3000

//here the middleware are called
app.use(express.json());

app.use("/api/auth", require('./routes/auth.js'));

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`)
})