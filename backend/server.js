const express = require('express');
const csv = require('csv-parser')
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

// parse application/json
app.use(bodyParser.json());

// enable CORS with options
app.use(cors({
  origin: 'https://mulcro.github.io/Ucm_waterhack/',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

//Create stream for reading cvs file
const csvStream = fs.createReadStream(path.join(__dirname + '/future1.csv'))

const results = [];
const dates = [];

csvStream.pipe(csv({
    mapValues: ({ header, index, value }) => 
       { 
        if(header === 'date'){
        dates.push(value);
        return value;
       }
       else{
          return value;
       }}
}))
.on('data', (data) => results.push(data))
.on('end', () => {


    app.get('/', (req, res) => {
        console.log("still working");
        res.json(results);
    })

    app.post('/getData', (req, res) => {
        if(!req.body.day || !req.body.month || !req.body.year) return res.sendStatus(400);
        console.log("working");
        console.log(req.body);

        const date = `${req.body.day}-${req.body.month}-${req.body.year}`;

        console.log(dates[0]);
        console.log(date);
        console.log(typeof(dates[0]));
        console.log(typeof(date));
        
        const dataIndex = dates.findIndex((element) => element === date);

        const floodRisk = results[dataIndex] > 12 ? true : false;

        res.json({...results[dataIndex], risk: floodRisk});
        res.status(200);
    })

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    })
})








