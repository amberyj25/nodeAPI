const shoppingCartA = require('../models/shoppingCartA');
const shoppingCartB = require('../models/shoppingCartB');

exports.getShoppingCartA = async (req, res) => {
  try {
    res.send({
      success: true,
      data: await shoppingCartA.getShoppingCartA()
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.getShoppingCartB = async (req, res) => {
  try {
    res.send({
      success: true,
      data: await shoppingCartB.getShoppingCartB()
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}

exports.deleteShoppingCartA = async (req, res) => {
  const { id } = req.body;

  try {
    res.send({
      success: true,
      data: await shoppingCartA.deleteShoppingCartA(id)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.deleteShoppingCartB = async (req, res) => {
  const { id } = req.body;

  try {
    res.send({
      success: true,
      data: await shoppingCartB.deleteShoppingCartB(id)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}
