const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  category: String,
  id: String,
  image: String,
  origin_price: String,
  price: String,
  title: String,
  unit: String,
});

const ShoppingSchema = mongoose.Schema({
  product_id: { type: String, required: true },
  product: { type: Object, ref: 'Product' },
  qty: { type: Number, required: true },
  total: { type: Number, required: true },
});

const ShoppingNews = mongoose.model('shoppingnews', ShoppingSchema);

class shoppingCartBModel {
  constructor() {};

  async getShoppingCartB() {
    return ShoppingNews.find();
  };

  async deleteShoppingCartB(id) {
    console.log({product_id: id})
    return ShoppingNews.deleteOne({product_id: id});
  };
}

module.exports = new shoppingCartBModel();