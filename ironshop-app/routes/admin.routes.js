const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");


router.get("/", (req, res, next) => {
  res.render("admin/profile");
});

router.get("/productos", (req, res, next) => {
  res.render("admin/products");
});

router.get("/productos/crear", (req, res, next) => {
  res.render("admin/create-products");
});

router.


router.get("/usuarios", (req, res, next) => {
  res.render("admin/users");
});

router.get("/comentarios", (req, res, next) => {
    res.render("admin/reviews")
})




module.exports = router;
