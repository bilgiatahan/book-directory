const express = require('express')
const router = express.Router();
const Users = require('../models/users')
const users = new Users();

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    users.openAccount(req.body)
    // console.log(users.users)
    res.redirect('/login')
})

module.exports = router;