const webShopping = require('../models/webShopping');

exports.getProductClass = async (req, res) => {
  try {
    res.send({
      success: true,
      data: await webShopping.getProductClass()
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}
