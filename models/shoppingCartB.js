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

  async createShoppingCartB(reqData, getDataFromProductListB) {
    const existDataFromShopping = await ShoppingNews.findOne({ product_id: reqData.product_id });
    if (existDataFromShopping) {
      return await ShoppingNews.updateOne(
        { product_id: reqData.product_id },
        {
          $set: {
            qty: reqData.qty,
            total: reqData.qty * getDataFromProductListB.price
          }
        }
      );
    } else {
      return await ShoppingNews.create({
        product: getDataFromProductListB,
        product_id: reqData.product_id,
        qty: reqData.qty,
        total: reqData.qty * getDataFromProductListB.price
      });
    };
  };

  async getShoppingCartB() {
    return await ShoppingNews.find();
  };

  async deleteShoppingCartB(id) {
    return await ShoppingNews.deleteOne({product_id: id});
  };
}

module.exports = new shoppingCartBModel();