const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Order = require('./model/order');
const app = express();


const fs = require('fs');
const cert = fs.readFileSync('keys/certificate.pem');
const options = {
    server: {sslCA: cert}
};

app.use(bodyParser.json());

app.use((req, res, next) => 
{
    res.setHeader("Access-Control-Allow-Origin",'*');
    res.setHeader("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader("Access-Control-Allow-Methods",
    "GET","POST","OPTIONS","PATCH","DELETE");
    next();
});

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



app.post('/api/orders',(req, res, next) =>
    {
        const orders = new Order(
            {
                username : req.body.username,
                email : req.body.email,
                placedOrder: req.body.placedOrder
            }
        )
        orders.save();
        console.log(orders);


        res.status(201).json({message: 'Order Created'});
    }
);

module.exports = app;

