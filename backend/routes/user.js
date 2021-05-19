const express = require('express');

const router = express.Router();

const bcrypt = require('bcrypt');

const User = require('../model/user');

const jwt = require('jsonwebtoken');

const ExpressBrute = require('express-brute');

const store = new ExpressBrute.MemoryStore();

const bruteforce = new ExpressBrute(store);

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

    console.log('signup method');
});

router.post('/login', bruteforce.prevent, (req, res, next) => 
{
    let fetchedUser;

    User.findOne({email:req.body.email})
        .then(user => {
            console.log(user);
            if(!user)
            {
                return res.status(401).json(
                    {
                        message: 'Auth Failed'
                    });
            }
            fetchedUser = user;
            return bcrypt.compare(req.body.password, user.password)
        }).then(result => 
            {
                console.log('2', result);
    
                if(!result)
                {
                    return res.status(401).json(
                        {
                            message: 'Auth Failed'
                        });
                }
    
                const token = jwt.sign({email:fetchedUser.email, userId:fetchedUser._id}, 'secret_this_should_be_longer_time_is',
                {
                    expiresIn:'1h'
                });
                res.status(200).json({token:token});
            })
            .catch(err => 
                {
                    console.log(err);
                    return res.status(401).json(
                        {
                            message: 'Auth Failure'
                        });
                });
    console.log('login method');
})
    
module.exports = router;