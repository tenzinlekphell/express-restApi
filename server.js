// Created db, connected to db using Node JS

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

// Import routes and use as middleware
const userRoutes = require('./routes/users');
const groceriesRoutes = require('./routes/groceries');

//
app.use(cors());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/groceries', groceriesRoutes);

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB connection URI stored in DB_CONNECTION env variable
const uri = process.env.DB_CONNECTION;

mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error connecting:', err);
  });

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
