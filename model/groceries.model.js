// Import/require mongoose module
const mongoose = require('mongoose');

// Create schema variable in order to create schema objects
const Schema = mongoose.Schema;

// Create groceries schema
const groceriesSchema = new Schema(
  {
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    storeName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Groceries = mongoose.model('Groceries', groceriesSchema);

// Exports Groceries schema
module.exports = Groceries;
