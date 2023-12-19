const express = require('express')
const mysql = require('mysql2')

const autorizationRouter = express.Router();
const SQLConfig = require('./configs').connectionSQLConfig
let connection

autorizationRouter.route('/')
    .get((req, res) => {
        res.render('autorization')
    })
    .post((req, res) => {
        connection = mysql.createConnection(SQLConfig).promise();
        connection.query('SELECT * FROM Users WHERE login_user = ? AND password_user = ?', Object.values(req.body)).then(result => {
            const user = result[0]
            console.log(user)
            if (user.length === 1) {
                console.log(user[0])
                req.flash('has_user', '1')
                res.end()
            }
            else {
                console.log(1)
                res.json({
                    message: 'not found'
                })
            }
            connection.end();
        })
    })

module.exports = autorizationRouter;