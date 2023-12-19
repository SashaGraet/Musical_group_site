const express = require('express')
const mysql = require('mysql2')

const SQLConfig = require('./configs').connectionSQLConfig
let connection
const regRouter = express.Router();
regRouter.route('/')
    .get((req, res) => {
        res.render('registration')
    })
    .post((req, res) => {
        connection = mysql.createConnection(SQLConfig).promise()
        try {
                connection.query('INSERT INTO Users (`login_user`, `password_user`, `first_name`, `last_name`, `birthday`, `musical_instrument`, `experience`, `city`) ' +
            'VALUES (?, ?, ?, ?, ?, ?, ?, ?)', Object.values(req.body)).then(result => {
                if (result[0].affectedRows === 0) {
                    console.log(3)
                    res.json({message: 'error'})
                }
                else {
                    res.json({message: 'ok'})
                }
            })
        } catch(err) {
            res.json({message: 'error'})
        } finally {
            connection.end()
        }
        
        
    })

module.exports = regRouter;