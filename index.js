import express from 'express';

const PORT = 6000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
