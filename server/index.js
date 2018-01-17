const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');
const helpers = require('./helpers.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

const port = process.env.PORT || 3000

app.use(bodyParser());

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

app.post('/signUp', (req, res) => {
  bcrypt.hash(req.body.password, saltRounds)
  .then(hash => {
    req.body.password = hash;
    db.signUpUser(req.body, (err, success) => {
      if (err) {
        console.log(err)
      } else {
        res.sendStatus(201);
      }
    });
  });
})

app.post('/login', (req, res) => {
  console.log('username: ', req.body.username)
  console.log('password: ', req.body.password)
  db.getUsers(req.body.username, (err, user) => {
    if (err) {
    } else {
      if (user.length === 0) {
        res.sendStatus(400);
      } else {
        bcrypt.compare(req.body.password, user[0].password)
        .then(result => {
          if (result) {
            res.sendStatus(201);
          } else {
            // add user notification of "wrong password"
            res.send(400);
          }
        });
      }
    }
  })
})

// ** Password Recovery ** //

app.get('/forgot', (req, res) => {
  username = req.query.username;
  password = helpers.makeid();

  bcrypt.hash(password, saltRounds).then((hash) => {

    db.resetPassword(username, hash, (err, user) => {
      var email = user.email;

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dungeonbuddiesdmscribe@gmail.com',
          pass: 'hackreactoratx31'
        }
      });

      var mailOptions = {
        from: 'dungeonbuddiesdmscribe@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'your new password is ' + password
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send(error)
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Email sentto: ' + email);
        }
      });
    })
  })
})

// ** ** ** //

app.post('/savePlayer', (req, res) => {
  db.savePlayer(req.body, (err, success) => {
    if (err) {
      console.log(err)
    } else {
      res.sendStatus(201);
    }
  })
})

app.get('/getGroups', (req, res) => {
  db.getGroups(req.query, (err, groups) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).send(groups);
    }
  })
})

app.get('/specificGroup', (req, res) => {
  db.specificGroup(req.query, (err, players) => {
    if (err) {
      console.log(err)
    } else {
      console.log(players);
      res.status(200).send(players);
    }
  })
})
















