const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const Product = require("./../models/Product.model");

router.get("/", (req, res, next) => {
  res.render("admin/profile");
});

router.get("/productos/crear", (req, res, next) => {
  res.render("admin/create-products");
});

router.post(
  "/productos/crear",
  fileUploader.single("imageFile"),
  (req, res, next) => {
    const { name, description, category, price } = req.body;
    console.log(req.body);

    Product.create({ name, description, category, price, image: req.file.path })
      .then(() => res.redirect("/admin/productos"))
      .catch((err) => next(err));
  }
);

router.get("/productos", (req, res, next) => {
  Product.find().then((products) => res.render("admin/products", { products }));
});

router.post("/productos/:id/borrar", (req, res, next) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
  .then(() => {
    const url = `/admin/productos`
    res.redirect(url)
  })
});

router.get("/usuarios", (req, res, next) => {
  res.render("admin/users");
});

router.get("/comentarios", (req, res, next) => {
  res.render("admin/reviews");
});

module.exports = router;
