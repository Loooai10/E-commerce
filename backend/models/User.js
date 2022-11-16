const mongoose = require('mongoose')

const schema = mongoose.Schema


const UserModel = new schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    //Associate the tweet model
    products: [{
        type: schema.Types.ObjectId,
        ref: 'Product'
    }],
    createdAt: {
        type: Date, default: Date.now
    },
}, {
    timestamps: true
})


//const User = mongoose.model('User', userschema)

const User = mongoose.model('User', UserModel)

module.exports = User;


