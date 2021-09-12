import express from 'express';

const importData = require('./data.json');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
