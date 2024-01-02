// const { v4: uuidv4 } = require('uuid');
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
  product: { type: Object, ref: 'Product' },
  product_id: { type: String, required: true },
  qty: { type: Number, required: true },
  total: { type: Number, required: true },
});

const ShoppingNews = mongoose.model('shoppingNews2', ShoppingSchema);

class shoppingModel {
  constructor() {};

  async createShoppingList(params) {
    const logoutResponse = await ShoppingNews.create({
      product : {
      category:
        params.product.category, id : params.product.id, image : params.product.image,
            origin_price : params.product.origin_price, price : params.product.price,
            title : params.product.title, unit : params.product.unit
      },
      product_id: params.product_id,
      qty: params.qty,
      total: params.total
    });

    return logoutResponse;
  };
}

module.exports = new shoppingModel();