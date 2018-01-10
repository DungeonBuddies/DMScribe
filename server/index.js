const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/../react-client/dist'));


app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});

app.get('/monsterlist', (req, response) => {
  axios('http://www.dnd5eapi.co/api/monsters')
  .then(res => {
    response.send(res.data);
  })
});

app.get('/monster', (req, response) => {
  const url = req.query.url;
  axios(url)
  .then(res => {
    response.send(res.data);
  });
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
      return imgSrc !== undefined ? resolve(imgSrc) : reject(imgSrc);
    });
  })
  .then(imgSrc => {
    if (imgSrc.substring(0, 6) === 'https:') {
      response.send(imgSrc);
    } else {
      response.send(`https:${imgSrc}`);
    }
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

