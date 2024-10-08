const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Place Order
router.post('/', async (req, res) => {
    const { userId, items, totalAmount } = req.body;

    try {
        const order = new Order({ userId, items, totalAmount });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get User Orders
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const orders = await Order.find({ userId }).populate('items');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
