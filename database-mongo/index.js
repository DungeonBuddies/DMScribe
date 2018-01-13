var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/groups');
// var uri = `mongodb://${cred.dbUsername}:${cred.dbPassword}@ds255787.mlab.com:55787/heroku_jhf97sfb`;
// var cred = require('./dbCredentials');

mongoose.connect(MONGOLAB_RED_URI);
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var users = mongoose.Schema({
  username: {type: String, unique: true},
  password: String
})

var players = mongoose.Schema({
  name: String,
  class: String,
  armor_class: Number,
  hit_points: Number,
  initMod: Number,
  perception: Number,
  speed: Number,
  image: String,
  notes: String,
  dm: String,
  group: String
});

var User = mongoose.model('User', users);

var Player = mongoose.model('Player', players);

var signUpUser = (user, callback) => {
  var userEntry = new User({username: user.username, password: user.password});
  userEntry.save((error, model) => {
    if (error) {
      callback(error, null);
    } else {
      console.log(`You have saved ${user.username} to the users database`);
      callback(null, 'success');
    }
  })
}

var getUsers = function (name, callback) {
  User.find({username: name}, function (err, users) {
    if (err) {
      callback(err, null)
    } else {
      callback(null, users);
    }
  })
}

var savePlayer = (player, callback) => {
  var playerEntry = new Player({
    name: player.name,
    class: player.class,
    armor_class: player.armor_class,
    hit_points: player.hit_points,
    initMod: player.init,
    perception: player.perception,
    speed: player.speed,
    image: player.image,
    dm: player.dm,
    group: player.group
  });
  playerEntry.save((error, model) => {
    if (error) {
      callback(error, null)
    } else {
      console.log(`You have saved the player ${player.name} to the player database`);
      callback(null, 'success');
    }
  })
}

var getGroups = (dm, callback) => {
  Player.find({dm: dm.dm}, (err, groups) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, groups)
    }
  })
}

var specificGroup = (target, callback) => {
  Player.find({dm: target.dm, group: target.group}, (err, players) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, players);
    }
  })
}

exports.signUpUser = signUpUser;
exports.getUsers = getUsers;
exports.savePlayer = savePlayer;
exports.getGroups = getGroups;
exports.specificGroup = specificGroup;









