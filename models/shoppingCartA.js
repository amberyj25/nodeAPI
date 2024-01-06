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

  async createShoppingCartA(reqData, getDataFromProductListA) {
    const existDataFromShopping = await ShoppingClasses.findOne({ product_id: reqData.product_id });

    if (existDataFromShopping) {
      return await ShoppingClasses.updateOne(
        { product_id: reqData.product_id },
        {
          $set: {
            qty: reqData.qty,
            total: reqData.qty * getDataFromProductListA.price
          }
        }
      );
    } else {
      return await ShoppingClasses.create({
        product: getDataFromProductListA,
        product_id: reqData.product_id,
        qty: reqData.qty,
        total: reqData.qty * getDataFromProductListA.price
      });
    };
  };

  async getShoppingCartA() {
    return await ShoppingClasses.find();
  };

  async deleteShoppingCartA(id) {
    return await ShoppingClasses.deleteOne({product_id: id});
  };
}

module.exports = new shoppingCartAModel();