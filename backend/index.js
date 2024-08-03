const express = require('express')
const dotenv = require('dotenv');
const { connection } = require('./config/connection');
const eventRoute = require('./routes/eventRoutes');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()

//configuration for .env file
dotenv.config();

//DB connection function
connection();

app.use(bodyParser.json());
app.use(cors());

//routes
app.use('/event',eventRoute)
//port (eg.localhost:0000)
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})