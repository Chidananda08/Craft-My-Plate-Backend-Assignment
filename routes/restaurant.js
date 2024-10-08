const express = require('express');
const Restaurant = require('../models/Restaurant');

const router = express.Router();

// Create Restaurant
router.post('/', async (req, res) => {
    const { name, location, cuisine } = req.body;

    try {
        const restaurant = new Restaurant({ name, location, cuisine });
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get All Restaurants
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
