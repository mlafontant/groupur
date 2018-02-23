const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    idgroup: { type: Number, required: true, unique: true },
    product_name: { type: String, required: true, unique: true },
    min_amt: { type: Number, required: true, default: 25 },
    discount_amt: { type: Number, required: true, default: 0.05 },
    orig_price: { type: Number, required: true, default: 100 },
    members: {type: Object, required: false, default: {}}
});


const Group = mongoose.model('group', groupSchema);

module.exports = Group;
