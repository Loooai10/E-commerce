const mongoose = require('mongoose')

const schema = mongoose.Schema


const Products = new schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: false },
    price: { type: String, required: true },
    size: { type: String, required: true },
    reviews: { type: String, required: false },
    //Associate the tweet model
    userid: [{
        type: schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})


const Prod = mongoose.model('Product', Products)

module.exports = Prod
