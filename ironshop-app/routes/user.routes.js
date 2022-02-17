const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const { isLoggedIn, checkRole } = require("../middleware/route-guard")
const { isAdmin, isUser, totalPrice } = require("../utils")
// const Product = require("../models/Product.model")
const User = require("../models/User.model");
const Cart = require("../models/Cart.model");
// const { Router } = require("express")
const saltRounds = 10;

// EDIT USER'S NAME ////////////////
router.get("/perfil", isLoggedIn, checkRole("USER"), (req, res, next) => {
  const id = req.session.currentUser._id;

  User.findById(id)
    .then((user) => {
      res.render("user/user-profile", user);
    })
    .catch((err) => next(err));
});

router.post("/perfil", isLoggedIn, checkRole("USER"), (req, res, next) => {
    const id = req.session.currentUser._id
    const { username, passwordHash } = req.body


    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(passwordHash, salt))
        .then(hashedPassword =>  User.findByIdAndUpdate(id, {username, passwordHash: hashedPassword}, { new: true }))
        .then(user => res.redirect("/perfil"))
        .catch(err => next(err))
 })




 // CART ////////////////
router.get("/carrito", isLoggedIn, checkRole("USER"), (req, res, next) => {
  const id = req.session.currentUser._id;

    Cart
        .findOne({user: id})
        .populate("product")
        .then(cart => {
            res.render("user/cart", {cart, totalPrice: totalPrice(cart.product)})
        })
        .catch(err => next(err))
})

router.post("/carrito", isLoggedIn, checkRole("USER"), (req, res, next) => {
  const { productId } = req.body;
  const id = req.session.currentUser._id;

  Cart.findOneAndUpdate({ user: id }, { $push: { product: productId } })
    .then(() => {
      res.redirect("/carrito");
    })
    .catch((err) => next(err));
});

module.exports = router;
// DELETE CART'S PRODUCTS ////////////////
router.post("/carrito/:productId/borrar", isLoggedIn, checkRole("USER"), (req, res, next) => {
    const id = req.session.currentUser._id
    const { productId } = req.params

    Cart
        .findOneAndUpdate({ user: id }, { $pull: { product: productId } })
        .then(() => {
            res.redirect("/carrito")
        })
        .catch(err => next(err))
})

router.get("/payment", isLoggedIn, checkRole("USER"), (req, res, next) => {
  res.render("user/payment");
});


module.exports = router
