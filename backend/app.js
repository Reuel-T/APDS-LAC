const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Order = require('./model/order');
const app = express();

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