const express = require('express')
const router = express.Router()
const orderController = require('../controllers/orders')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/Orders', orderController.getAllOrders)
router.get('/getOrdersbyUser/:id', orderController.getOrdersById)

// router.get('/Orders/:_id', tweetsController.getOrders)

router.post('/cart/add', isLoggedIn, orderController.createOrder)

// router.put('/tweets/:_id', tweetsController.updateTweet)

// router.delete('/tweets/:_id', tweetsController.deleteTweet)
router.delete('/order/:orderId', orderController.deleteOrder)


// We export our routes 
module.exports = router




