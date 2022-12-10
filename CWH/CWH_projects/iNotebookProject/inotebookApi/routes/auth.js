const express = require('express');
const router = express();
const User = require('../models/Users');

//Create a new user without the authentication.

router.post('/', (req, res) => {
    console.log(req.body);
    const users = User(req.body);
    users.save();
    res.sendStatus(200);
})

module.exports = router; 