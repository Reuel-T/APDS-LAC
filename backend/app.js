const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

//morgan for logging
const morgan = require('morgan');


//ROUTES
const orderRoutes = require('./routes/orders');
const userRoutes = require('./routes/user')


const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: {sslCA: cert}
};


app.use(bodyParser.json());

//Allowing CORS
app.use((req, res, next) => 
{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods","*");
    next();
});

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
morgan.token('tbody',(req, res) => {
    if(req.body)
    {
        return JSON.stringify(req.body)
    }
    if(res.body)
    {
        return JSON.stringify(res.body)
    }    
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :tbody', { stream: accessLogStream }));

//connecting to DB
mongoose.connect("mongodb+srv://admin:admin@apds-lac.omg3g.mongodb.net/order-db?retryWrites=true&w=majority")
    .then(() => 
        {
            console.log('Connected to DB');
        }
    )
    .catch(() => 
        {
            console.log('Connection dead');
        }
    );

app.use('/api/orders', orderRoutes);
app.use('/api/user', userRoutes);

module.exports = app;