const express = require('express');

const router = express.Router();

const Order = require('../model/order');

router.get('',(req, res, next) => 
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


router.post('',(req, res, next) =>
    {
        const orders = new Order(
            {
                username : req.body.username,
                email : req.body.email,
                placedOrder: req.body.placedOrder
            }
        )
        orders.save()
        .then((createdOrder) => 
        {
            console.log(createdOrder);
            res.status(201).json(
                {
                    message: 'Order Created',
                    orderID: createdOrder._id
                })
        });
        console.log(orders);
    }
);

router.delete('/:id',(req,res,next) => 
{
    Order.deleteOne({_id: req.params.id})
        .then(result => 
            {
                res.status(200).json({message : 'Order Deleted'})
                console.log(`Order with id ${req.params.id} Deleted from DB`);
            });
});

module.exports = router;