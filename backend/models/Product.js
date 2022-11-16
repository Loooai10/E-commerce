const mongoose = require('mongoose')

const schema = mongoose.Schema


const Products = new schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: false },
    price: { type: String, required: true },
    size: { type: String, required: true },
    //Associate the tweet model
    user_id: [{
        type: schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})


const Product = mongoose.model('Product', Products)

module.exports = Product;
