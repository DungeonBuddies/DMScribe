var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groups');

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

exports.signUpUser = signUpUser;
exports.getUsers = getUsers;









