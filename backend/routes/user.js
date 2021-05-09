const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../model/user');

router.post('/signup', (req,res, next) => 
{
    bcrypt.hash(req.body.password,10)
        .then(hash => 
            {
                const user = new User(
                    {
                        username : req.body.username,
                        email: req.body.email,
                        password : hash
                    })

                console.log(req.body.username);
                console.log(req.body.email);
                console.log(req.body.password);
            
                user.save()
                    .then(result => 
                        {
                            res.status(201).json(
                                {
                                    message: 'User Created',
                                    result: result
                                });
                        })
                    .catch(err => 
                        {
                            res.status(500).json(
                                {
                                    error: err
                                })
                        });
            });


});

module.exports = router;