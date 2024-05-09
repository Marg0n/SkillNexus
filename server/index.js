const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//config
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors({
    origin: [
        'http://localhost:5000'
    ],
    credentials: true,
    optionsSuccessStatus: 200,
}));
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Server is running');
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });

//connection to mongodb