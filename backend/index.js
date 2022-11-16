const express = require('express')
const cors = require('cors')
// Initializing our application
const app = express()

require('dotenv').config()
require('./config/database')
const path = require('path')
// Mount our middleware
//....
app.use(cors())
app.use(express.json())
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
//app.use(express.urlencoded({extended: false}))
//....
//app.use('/', require('./routes/tweets'))
app.use('/', require('./routes/users'))
app.use('/', require('./routes/products'))

//React below
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Listening on a port
app.listen(4000, () => {
    console.log('App listening on port 4000!')
})











