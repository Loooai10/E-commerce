// We import the Model to communicate with the Database
const { default: Product } = require('../models/product')
const prd = require('../models/product')

async function getAllProduct(req,res) {
    const allprdct = await Product.find()
    res.json(allprdct)
}

async function addproduct(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    prd.create(req.body)
    .then(newproduct => res.json(newproduct))
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

async function updateproduct(req, res) {
    try {
    // await Tweet.findOne({ _id: ... })
    let updatedproduct = await Tweet.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'Product updated Successfully!'})
    // res.json(updatedTweet)
    } catch (err) {
        res.json(err)
    }
}


async function deleteproduct(req,res) {
    try {
        await Product.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'Product Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


async function getproduct(req,res) {
    try {
        const product = await Product.findById(req.params._id)
        res.json(tweet)
    } catch (err) {
        res.json(err)
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllProduct,
    getproduct,
    addproduct,
    updateproduct,
    deleteproduct
}




