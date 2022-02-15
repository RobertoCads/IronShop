const Product = require("../models/Product.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/productos/cat/:category", (req, res, next) => {
  const { category } = req.params
  // console.log(category)
  Product.find({ category }).then((products) =>
    res.render("products-list", { category, products })
  );
})

module.exports = router;
