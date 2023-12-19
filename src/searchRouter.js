const express = require('express')
const mysql = require('mysql2')

const SQLConfig = require('./configs').connectionSQLConfig
let connection
const searchRouter = express.Router();
searchRouter.route('/')
    .get((req, res) => {
        let users = req.flash('users')
        if (users.length) {
            users = users.map(user => {
                return {
                    name: user['last_name'] + ' ' + user['first_name'],
                    musical_instrument: user['musical_instrument'],
                    age: new Date(Date.now()).getFullYear() - new Date(user['birthday']).getFullYear(),
                    city: user['city']
                }
            })
            console.log(users)
            res.render('search', {
                users: users
            })
        }
        else {
            res.render('search', {
                users: []
            })
        }
        
    })
    .post((req, res) => {
        connection = mysql.createConnection(SQLConfig).promise()
        let query = 'SELECT * FROM Users'
        let arr
        if (Object.keys(req.body).length) {
            query += ' WHERE'
        }
        if (req.body.tool) {
            query += ' musical_instrument = ?'
            query += ' OR musical_instrument = ?'.repeat(req.body.tool.length - 1)
            arr = Object.values(req.body.tool);
            
        }
        if (req.body.exp) {
            if (req.body.tool) {
                query += ' OR'
            }
            query += ' experience <= ?'
            query += ' OR experience <= ?'.repeat(req.body.exp.length - 1)
            if (arr) {
                arr = arr.concat(Object.values(req.body.exp))
            }
            else {
                arr = Object.values(req.body.exp)
            }
            
            
        }
        connection.query(query, arr).then(result => {
            req.flash('users', result[0])
            console.log(result[0])
            res.json({message: 'ok'})
            connection.end()
        })
    })

module.exports = searchRouter;