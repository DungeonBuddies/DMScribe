const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

app.get('/monsterimg', (req, res1) => {
  const monsterPath = req.query.monsterName.split(' ').join('-');
  axios.get(`https://www.dndbeyond.com/monsters/${monsterPath}`)
  .then(res2 => {
    const html = res2.data;
    const $ = cheerio.load(html);
    const imgSrc = $('.monster-image').attr('src');
    res1.send(imgSrc);
  });
});
