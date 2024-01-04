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

const ShoppingClasses = mongoose.model('shoppingclasses', ShoppingSchema);

class shoppingCartAModel {
  constructor() {};

  async getShoppingCartA() {
    return ShoppingClasses.find();
  };

  async deleteShoppingCartA(id) {
    return ShoppingClasses.deleteOne({product_id: id});
  };
}

module.exports = new shoppingCartAModel();