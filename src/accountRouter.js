const express = require('express')
const mysql = require('mysql2')

const SQLConfig = require('./configs').connectionSQLConfig
let connection
const accountRouter = express.Router();
accountRouter.route('/')
    .get((req, res) => {
        connection = mysql.createConnection(SQLConfig).promise()
        connection.query('SELECT * FROM Users WHERE id_user = 1').then(result => {
            let user = result[0][0]
            console.log(user)
            res.render('account', {
                has_user: req.flash('has_user')[0] === '0' ? false : true,
                name: user['last_name'] + ' ' + user['first_name'],
                musical_instrument: user['musical_instrument'],
                age: new Date(Date.now()).getFullYear() - new Date(user['birthday']).getFullYear(),
                city: user['city'],
            })
        })
        connection.end()
    })

module.exports = accountRouter;