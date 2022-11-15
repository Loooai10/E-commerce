const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/products', productController.getAllProduct)

router.get('/products/:_id', productController.getproduct)

router.post('/products', isLoggedIn, productController.addproduct)

router.put('/products/:_id', productController.updateproduct)

router.delete('/products/:_id', productController.deleteproduct)



// We export our routes 
module.exports = router




