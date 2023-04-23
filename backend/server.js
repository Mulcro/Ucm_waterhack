const express = require('express');
const csv = require('csv-parser')
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const app = express();

// enable CORS with options
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

//Create stream for reading cvs file
const csvStream = fs.createReadStream(path.join(__dirname + '/future1.csv'))

const results = [];

csvStream.pipe(csv())
.on('data', (data) => results.push(data))


app.get('/', (req, res) => {
    res.json(results);
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})



