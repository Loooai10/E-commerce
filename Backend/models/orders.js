const mongoose = require('mongoose')

const schema = mongoose.Schema


const Orders = new schema({
    quantity: { type: String, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: false },
    price: { type: String, required: true },
    size: { type: String, required: true },
    item_id: { type: String, required: true },

    //Associate the tweet model
    user_id: [{
        type: schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})


const order = mongoose.model('order', Orders)

module.exports = order;
