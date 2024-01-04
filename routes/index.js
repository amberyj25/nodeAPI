var express = require('express');
var router = express.Router();
const productListController = require('../controllers/productList');
const shoppingCartController = require('../controllers/shoppingCart');
const logInOutController = require('../controllers/logInOut');

/* GET productList A */
router.get('/productListA', productListController.getProductListA);

/* GET productList B */
router.get('/productListB', productListController.getProductListB);

/* GET shoppingCart A */
router.get('/shoppingCartA', shoppingCartController.getShoppingCartA);

/* GET shoppingCart B */
router.get('/shoppingCartB', shoppingCartController.getShoppingCartB);

/* DELETE shoppingCart A */
router.delete('/shoppingCartA', shoppingCartController.deleteShoppingCartA);

/* DELETE shoppingCart B */
router.delete('/shoppingCartB', shoppingCartController.deleteShoppingCartB);

/* GET login */
router.post('/login', logInOutController.logIn);

/* GET logout */
router.post('/logout', logInOutController.logOut);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
