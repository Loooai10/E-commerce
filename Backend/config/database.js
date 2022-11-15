const mongoose = require('mongoose')
//fix the pathing with a new one
mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.on('connected', () => {
    console.log('Connected to database!')
})


