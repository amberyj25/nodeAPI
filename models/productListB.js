const mongoose = require('mongoose');

const productListBSchema = mongoose.Schema({
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

const ProductListB = mongoose.model('productsnews', productListBSchema);

class productListB {
  constructor() {};

  async getProductListB() {
    return await ProductListB.find();
  };
}

module.exports = new productListB();