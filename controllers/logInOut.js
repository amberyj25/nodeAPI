const logInOut = require('../models/logInOut');

exports.logIn = async (req, res) => {
  try {
    const logInData = req.body;
    const meberShipList = await logInOut.logIn();
    let errMsg = '';
    const isMeberShip = meberShipList.find(member => member.username === logInData.username && member.password === logInData.password);

    if (!isMeberShip) errMsg = '沒有這位會員';

    res.send({
      success: true,
      data: isMeberShip,
      msg: errMsg
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.logOut = async (req, res) => {
  const meberShipOut = await logInOut.logOut();
  const isMeberShip = meberShipOut.find(member => member.message === '已登出');
  let errMsg = '';

  if (!isMeberShip) errMsg = '未登出';

  try {
    res.send({
      success: true,
      data: isMeberShip,
      msg: errMsg
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}
