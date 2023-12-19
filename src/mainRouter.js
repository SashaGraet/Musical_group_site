const express = require('express')

const mainRouter = express.Router();

mainRouter.route('/')
    .get((req, res) => {
        res.render('main', {
            has_user: req.flash('has_user')[0] === '0' ? false : true
        })
    })
mainRouter.route('/logout')
    .get((req, res) => {
        console.log(2)
        req.flash('has_user', '0')
        res.send('hi')
    })
module.exports = mainRouter;