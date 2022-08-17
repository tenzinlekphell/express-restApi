const router = require('express').Router();
let Groceries = require('../model/groceries.model');
const User = require('../model/user.model');

// Get groceries data
router.get('/', (req, res) => {
  Groceries.find()
    .then((groceries) => res.json(groceries))
    .catch((err) => res.status(400).json('Error' + err));
});

// Post groceries data
router.post('/buyfood', (req, res) => {
  const itemName = req.body.itemName;
  const price = req.body.price;
  const storeName = req.body.storeName;

  const newGroceries = new Groceries({ itemName, price, storeName });
  newGroceries
    .save()
    .then(() => res.json('Groceries bought'))
    .catch((err) => res.status(400).json('Error' + err));
});

// Delete groceries data
router.delete('/:id', (req, res) => {
  Groceries.findByIdAndDelete(req.params.id);
  then(() => res.json(`${req.params.id} has been removed`)).catch((err) =>
    res.status(400).json('Error' + err)
  );
});

// Update groceries data
router.post('/update/:id', (req, res) => {
  User.findById(req.params.id)
    .then((groceries) => {
      groceries.itemName = req.body.itemName;
      groceries.price = req.body.price;
      groceries.storeName = req.body.storeName;
      groceries
        .save()
        .then(() => res.json('Groceries has been updated'))
        .catch((err) => res.status(400).json('Error' + err));
    })
    .catch((err) => res.status(400).json('Error' + err));
});

module.exports = router;
