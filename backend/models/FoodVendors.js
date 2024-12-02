const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    photoUrl: { type: String, required: true }
});

const FoodVendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    logo: { type: String, required: true },
    menuItems: [MenuItemSchema], // Array of menu items
    vendorEmail: { type: String, required: true }, // Email of the vendor
});


const FoodVendors = mongoose.model('FoodVendor', FoodVendorSchema, 'foodvendors');
module.exports = FoodVendors