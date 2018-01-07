var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');
var axios = require('axios');
var cheerio = require('cheerio');

var app = express();

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
    console.log(imgSrc);
    res1.send(imgSrc);
  });
});
