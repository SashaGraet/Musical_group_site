const express = require('express')

const rootRouter = express.Router();

rootRouter.route('/')
    .get((req, res) => {
        req.flash('has_user', '0')
        res.redirect('/main')
    })

module.exports = rootRouter;