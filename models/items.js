const mongoose = require('mongoose');

/*
1. Name
2. Quantity
3. Price
4. Purchase date
*/

const ItemSchema = new mongoose.Schema({  //creating an object of the class schema
name: String,
quantity: Number,
price: Number,
purchase_date: Date
});

module.exports = mongoose.model("Item", ItemSchema);