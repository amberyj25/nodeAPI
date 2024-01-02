const productListA = require('../models/productListA');
const productListB = require('../models/productListB');

exports.getProductListA = async (req, res) => {
  try {
    res.send({
      success: true,
      data: await productListA.getProductListA()
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
};

exports.getProductListB = async (req, res) => {
  try {
    res.send({
      success: true,
      data: await productListB.getProductListB()
    });

    res.end();
  } catch (err) {
    console.log(err);
  }
}
