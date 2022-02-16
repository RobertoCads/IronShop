const Product = require("../models/Product.model")

const router = require("express").Router()

/* GET home page */
router.get("/", (req, res, next) => {
  Product.find({ featured: true })
  .limit(3)
  .then((products) =>  res.render("index", {  products }))
})

router.get("/productos/cat/:category", (req, res, next) => {
  const { category } = req.params
  Product.find({ category }).then((products) =>
    res.render("products-list", { category, products })
  )
})

router.get("/producto/:id", (req, res, next) => {
  const { id } = req.params

  Product.findById(id)
    .then((product) => {
      res.render("product-details", { product })
    })
    .catch((err) => next(err))
})

module.exports = router