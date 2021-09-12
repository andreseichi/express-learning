const axios = require('axios');

const token = process.env.TWITTER_BEARER_TOKEN;

const api = axios.create({
  baseURL: 'https://api.twitter.com/1.1/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
});

module.exports = api;
