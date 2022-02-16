const Product = require("../models/Product.model");
const Rating = require("../models/Rating.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  Product.find({ featured: true })
    .limit(3)
    .then((products) => res.render("index", { products }));
});

router.get("/productos/cat/:category", (req, res, next) => {
  const { category } = req.params;
  Product.find({ category }).then((products) =>
    res.render("products-list", { category, products })
  );
});

router.get("/producto/:id", (req, res, next) => {
  const { id } = req.params;

  Promise.all([
    Product.findById(id),
    Rating.find({ product: id })
  ])

  .then(([product, ratings]) => {
    res.render("product-details", { product, ratings })
    console.log(product, ratings)
  })
})

router.post("/producto/:id", (req, res, next) => {
  const { id } = req.params;
  const { comment, rating } = req.body;
  const user = req.session.currentUser._id;
  Rating.create({ comment, user, rating, product: id })
    .then(() => {
      const url = `/producto/${id}`;
      res.redirect(url);
    })
    .catch((err) => next(err));
});

module.exports = router;
