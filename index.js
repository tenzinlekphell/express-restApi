import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 1000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  console.log('response was sent');
  res.send('Hello from homepage');
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
