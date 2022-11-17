const Order = require('../models/orders')
const prd = require('../models/orders')

async function getAllOrders(req, res) {
    const orders = await Order.find(
    ).limit(6)

    res.json(orders)
}

async function getOrdersById(req, res) {
    const orders = await Order.find({ "order.user_id": req.params.id })

    res.json(orders)
}

async function createOrder(req, res) {
    console.log(req.user.id)
    const result = await Order.create({ user_id: req.user.id, ...req.body })

    res.json(result)
}


async function deleteOrder(req, res) {
    try {
        await Order.findByIdAndDelete(req.params.orderId)
        res.json({ message: 'Order deleted successfully' })
    } catch (err) {
        res.json(err)
    }
}

module.exports = {
    getAllOrders,
    createOrder,
    getOrdersById,
    deleteOrder,
}
