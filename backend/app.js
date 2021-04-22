const express = require('express');

const app = express();
/*
app.use((req, res, next) => 
{
    res.send('first middleware, use the next method to call the next one');
    next();
});

app.use((req, res, next) => 
{
    res.send('second middleware, use the next method to call the next one');
});
*/

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


module.exports = app;

