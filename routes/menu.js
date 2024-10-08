const express = require('express');
const MenuItem = require('../models/MenuItem');

const router = express.Router();

// Add Menu Item
router.post('/:restaurantId', async (req, res) => {
    const { restaurantId } = req.params;
    const { name, price } = req.body;

    try {
        const menuItem = new MenuItem({ restaurantId, name, price });
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Menu Items by Restaurant
router.get('/:restaurantId', async (req, res) => {
    const { restaurantId } = req.params;

    try {
        const menuItems = await MenuItem.find({ restaurantId });
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
