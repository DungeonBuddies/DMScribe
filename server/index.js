var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo');
var request = require('request');
var cheerio = require('cheerio');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

app.get('/monsterimg', (req, res) => {
  const monsterPath = req.query.monsterName.split(' ').join('-');
  request(`https://www.dndbeyond.com/monsters/${monsterPath}`, (err, scrapeRes, body) => {
    const $ = cheerio.load(body);
    const imgUrl = $('.monster-image').attr('src');
    res.send(imgUrl);
  });
});
