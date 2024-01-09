const shoppingCartA = require('../models/shoppingCartA');
const shoppingCartB = require('../models/shoppingCartB');
const productListA = require('../models/productListA');
const productListB = require('../models/productListB');


exports.createShoppingCartA = async (req, res) => {
  const reqData = req.body.data;
  const productAList = await productListA.getProductListA();
  const getDataFromProductListA = productAList.find(product => product.id === reqData.product_id);

  try {
    res.send({
      success: true,
      data: await shoppingCartA.createShoppingCartA( reqData, getDataFromProductListA)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.createShoppingCartB = async (req, res) => {
  const reqData = req.body.data;
  const productBList = await productListB.getProductListB();
  const getDataFromProductListB = productBList.find(product => product.id === reqData.product_id);

  try {
    res.send({
      success: true,
      data: await shoppingCartB.createShoppingCartB( reqData, getDataFromProductListB)
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
};

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
};

exports.deleteShoppingCartA = async (req, res) => {
  const { id } = req.params;

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
  const { id } = req.params;

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
