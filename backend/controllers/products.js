// We import the Model to communicate with the Database
const Product = require('../models/Product')
const prd = require('../models/Product')

async function getAllProducts(req, res) {
    const allProducts = await Product.find()
    res.json(allProducts)
}

async function addProduct(req, res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    prd.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => res.json(err))

    // Method 2
    // let newTweet = await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

async function updateProduct(req, res) {
    try {
        // await Tweet.findOne({ _id: ... })
        let updateProduct = await Product.findByIdAndUpdate(
            req.params._id,
            req.body //form body
            // {content: req.body.content}
        )
        res.status(200).json({ message: 'Product updated Successfully!' })
        // res.json(updatedTweet)
    } catch (err) {
        res.status(400).json({ message: 'Product not updated' })
        res.json(err)
    }
}


async function deleteProduct(req, res) {
    try {
        let deleteProduct = await Product.findByIdAndDelete(req.params._id)
        res.status(200).json({ message: 'Product Deleted Successfully' })
        res.json({ message: 'Product Deleted Successfully' })
    } catch (err) {
        res.status(200).json({ message: 'Product Deleted Successfully' })
        res.json(err)
    }
}


// Exporting/Sharing our functions
module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct
}




