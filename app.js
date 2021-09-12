require('dotenv').config();
const express = require('express');

const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/trends', async (req, res) => {
  try {
    const { data } = await api.get('trends/place.json?id=1');
    console.log(data);
    return res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.get('/trends/:id', async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  try {
    const { data } = await api.get(`trends/place.json?id=${id}`);
    return res.send(data);
  } catch (error) {
    res.send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
