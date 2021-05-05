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
    "*");
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


app.get('/api/orders',(req, res, next) => 
{
    Order.find().then((documents) => 
    {
        res.json(
        {        
            message : 'Orders Fetched from Server',
            orders : documents
        });
    });
})


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

app.delete('/api/orders/:id',(req,res,next) => 
{
    Order.deleteOne({_id: req.params.id})
        .then( result => 
            {
                res.status(200).json({message : 'Order Deleted'})
                console.log(`Order with id ${req.params.id} Deleted`);
            });
});

app.get('/api/yeet', (req,res, next) =>
{
    res.json
    (
        {
            message: 'hi'
        }
    )

    res.status(200).json({message: 'Sup man'});
})

module.exports = app;