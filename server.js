// Created db, connected to db using Node JS
const path = require('path');
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT || 5050, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
