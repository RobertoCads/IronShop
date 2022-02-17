const router = require("express").Router();
const fileUploader = require("../config/cloudinary.config");
const bcryptjs = require("bcryptjs");
const Product = require("./../models/Product.model");
const Rating = require("./../models/Rating.model");
const User = require("../models/User.model");

const saltRounds = 10;

const { isLoggedIn, checkRole } = require("../middleware/route-guard");

router.get(
  "/productos/crear",
  isLoggedIn,
  checkRole("ADMIN"),
  (req, res, next) => {
    res.render("admin/create-products");
  }
)

router.post( "/productos/crear", fileUploader.single("imageFile"), (req, res, next) => {
    const { name, description, featured, category, price } = req.body

    Product.create({name, description, featured, category, price, image: req.file.path})
      .then(() => res.redirect("/admin/productos"))
      .catch((err) => next(err));
  }
);

router.get("/productos", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  Product.find()
    .then((products) => res.render("admin/products", { products }))
    .catch(err => next(err))
})

// EDIT PRODUCTS ///////////////////
router.get( "/productos/:id/editar", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
    const { id } = req.params

    Product.findById(id)
      .then((products) => {
        res.render("admin/update-products", products);
      })
      .catch((err) => next(err));
  }
)

router.post("/productos/:id/editar", fileUploader.single("imageFile"), isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
    const { id } = req.params
    const { name, category, featured, description, price } = req.body
    Product.findByIdAndUpdate(
      id,
      { name, category, description, featured, price, image: req.file?.path },
      { new: true }
    )
      .then((prueba) => {
        res.redirect("/admin/productos")
      })
      .catch((err) => next(err));
  }
);

// EDITAR ADMIN'S NAME ///////////////////
router.get("/", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const id = req.session.currentUser._id;

  User.findById(id)
    .then((user) => {
      res.render("admin/profile", user);
    })
    .catch((err) => next(err));
});

router.post("/", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
  const id = req.session.currentUser._id
  const { username, passwordHash } = req.body

  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(passwordHash, salt))
    .then((hashedPassword) =>
      User.findByIdAndUpdate(
        id,
        { username, passwordHash: hashedPassword },
        { new: true }
      )
    )
    .then((user) => {
      res.redirect("/admin")
    })
    .catch((err) => next(err));
});

// DELETE PRODUCTS ///////////////////
router.post( "/productos/:id/borrar", isLoggedIn, checkRole("ADMIN"), (req, res, next) => {
    const { id } = req.params
  Product.findByIdAndDelete(id)
    .then(() => {
      const url = `/admin/productos`
      res.redirect(url)
    })
    .catch(err => next(err))
  }
);

router.get("/comentarios", (req, res, next) => {
  // const { id } = req.params;

  Rating.find()
    .populate("product")
    .then((ratings) => {
      res.render("admin/reviews", ratings)
    })
})

module.exports = router;
