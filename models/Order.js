const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
