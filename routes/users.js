const router = require('express').Router();
let User = require('../model/user.model');

// Get user data
router.route('/').get((req, res) => {
  User.find()
    .then((Users) => res.json(Users))
    .catch((err) => res.status(400).json('Error'));
});

// Post user data
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const newUser = new User({ name, age });
  newUser
    .save()
    .then(() => res.json('User added'))
    .catch((err) => res.status(400).json('Error' + err));
});

// Delete user data
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id);
  then(() => res.json('User has been removed')).catch((err) =>
    res.status(400).json('Error' + err)
  );
});

// Update user data
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then((User) => {
      User.name = req.body.name;
      User.age = req.body.age;
      User.save()
        .then(() => res.json('User has been updated'))
        .catch((err) => res.status(400).json('Error' + err));
    })
    .catch((err) => res.status(400).json('Error' + err));
});

module.exports = router;
