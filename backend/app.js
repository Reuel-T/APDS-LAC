const express = require('express');
const bodyParser = require('body-parser');

const app = express();

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

app.use('/api/orders',(req, res, next) => 
    {
        const orders = 
        [
            {
                id: 'ID1',
                username: 'Reuel',
                email : 'reueltyler@gmail',
                placedOrder: 'PlacedOrder1'
            },
            {
                id: 'ID2',
                username: 'Lesser Being',
                email : 'reueltyler@gmail',
                placedOrder: 'PlacedOrder2'
            }
        ];

        res.json(
            {
                message: 'Orders retrieved from server',
                orders:orders
            }
        );
    });

const Order = require('./model/order');

app.post('/api/orders',(req, res, next) =>
    {
        const orders = new Order(
            {
                username : req.body.username,
                email : req.body.email,
                placedOrder: req.body.placedOrder
            }
        )
        console.log(orders);
        res.status(201).json({message: 'Order Created'});
    }
);

module.exports = app;

