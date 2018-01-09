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

app.get('/monsterimg', (req, response) => {
  const monsterName = req.query.monsterName;
  const monsterPath = monsterName.split(' ').join('-');
  axios.get(`https://www.dndbeyond.com/monsters/${monsterPath}`)
  .then(res => {
    return new Promise((resolve, reject) => {
      const html = res.data;
      const $ = cheerio.load(html);
      const imgSrc = $('.monster-image').attr('src');
      return imgSrc === !undefined ? resolve(imgSrc) : reject(imgSrc);
    });
  })
  .then(imgSrc => {
    response.send(imgSrc);
  })
  .catch(imgSrc => {
    axios.get(`https://www.aidedd.org/dnd/monstres.php?vo=${monsterPath}`)
    .then(res => {
      const html = res.data;
      const $ = cheerio.load(html);
      const imgSrc = $('.picture').attr('src');
      response.send(imgSrc);
    });
  });
});

app.get('/classimg', (req, res1) => {
  const classPath = req.query.className.split(' ').join('-');
  axios.get(`https://www.dndbeyond.com/characters/classes/${classPath}`)
  .then(res2 => {
    const html = res2.data;
    const $ = cheerio.load(html);
    const imgSrc = $('.image').attr('src');
    res1.send(imgSrc);
  });
});

