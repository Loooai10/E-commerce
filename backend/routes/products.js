const express = require('express')
const router = express.Router()
const productController = require('../controllers/products')
// We import our controller functions above

// Require isLoggedIn Middleware.
const isLoggedIn = require("../helper/isLoggedIn");

// We define the routes and controllers
router.get('/products', productController.getAllProducts)
router.get('/products/:_id', productController.getProductById)

router.post('/products', productController.addProduct)
router.post('/products/addtocart', productController.addToCart)

router.put('/products/:_id', productController.updateProduct)

router.delete('/products/:_id', productController.deleteProduct)



// We export our routes 
module.exports = router




