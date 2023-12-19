const express = require('express')
const mysql = require('mysql2')
const path = require('path')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const flash = require('connect-flash');
const app = express();

const rootRouter = require('./rootRouter');
const mainRouter = require('./mainRouter');
const logRouter = require('./autorizationRouter')
const accountRouter = require('./accountRouter')
const regRouter = require('./registrationRouter')
const searchRouter = require('./searchRouter')

const port = 3000;
const host = '127.0.0.1';

app.set('view engine', 'pug')
app.set('views', path.resolve('public/views'))

app.use(cookieParser('root'));
app.use(session({ cookie: { maxAge: 3600 * 24 } }));
app.use(flash());

app.use('/css', express.static(path.resolve('public/css')))
app.use('/js', express.static(path.resolve('public/js')))
app.use('/assets', express.static(path.resolve('public/assets')))
app.use(express.json())


app.use('/', rootRouter)
app.use('/main', mainRouter)
app.use('/autorization', logRouter)
app.use('/account', accountRouter)
app.use('/registration', regRouter)
app.use('/search', searchRouter)


app.listen(port, host, () => {
    console.log(`Сервер запущен на порту ${port}, хост: ${host}`)
})










