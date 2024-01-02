const mongoose = require('mongoose');

const productListASchema = mongoose.Schema({
  id: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  origin_price: {
    type: String,
    require: true
  },
  price: {
    type: String,
    require: true
  },
  unit: {
    type: String,
    require: true
  },
  num: {
    type: Number,
    require: true
  }
});

const ProductListA = mongoose.model('productsclasses', productListASchema);

class productListA {
  constructor() {};

  async getProductListA() {
    return await ProductListA.find();
  };
}

module.exports = new productListA();