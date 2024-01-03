var express = require('express');
var router = express.Router();
const productListController = require('../controllers/productList');
const logInOutController = require('../controllers/logInOut');

/* GET productList A */
router.get('/productListA', productListController.getProductListA);

/* GET productList B */
router.get('/productListB', productListController.getProductListB);

/* GET login */
router.post('/login', logInOutController.logIn);

/* GET logout */
router.post('/logout', logInOutController.logOut);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
