const mongoose = require('mongoose');

const logInSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
});

const logOutSchema = mongoose.Schema({
  message: {
    type: String,
    require: true
  }
});

const LogIn = mongoose.model('logins', logInSchema);
const LogOut = mongoose.model('logouts', logOutSchema);

class logInOut {
  constructor() {};

  async logIn() {
    console.log(28)
    return await LogIn.find();
  };

  async logOut() {
    return await LogOut.find();
  };
}

module.exports = new logInOut();