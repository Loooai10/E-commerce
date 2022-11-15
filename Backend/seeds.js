require('dotenv').config()
require('./config/database')
const Tweet = require('./models/Tweet')
const Product = require('./models/Product')
//place Products data info below




// Tweet.insertMany([
//     {
//         name: 'Hussein',
//         content: 'I get red text around name and content',
//     },
//     {
//         name: 'Mohd',
//         content: 'Hello World!',
//     },
//     {
//         name: 'Kareem',
//         content: 'If you can hear me put your hand down',
//     }
// ])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))





