const express = require('express');

const router = express.Router();

const Order = require('../model/order');

const CheckAuth = require('../middleware/check-auth');

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

    console.log('get orders');
})


router.post('',CheckAuth,(req, res, next) =>
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
            //console.log(createdOrder);
            res.status(201).json(
                {
                    message: 'Order Created',
                    orderID: createdOrder._id
                })
        });
        //console.log(orders);
        console.log('post orders');
    }
);

router.delete('/:id',CheckAuth, (req,res,next) => 
{   
    Order.deleteOne({_id: req.params.id})
        .then(result => 
            {
                res.status(200).json({message : 'Order Deleted'})
                console.log(`Order with id ${req.params.id} Deleted from DB`);
                console.log(req);
            });
    console.log('delete order');
});

module.exports = router;