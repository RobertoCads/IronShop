const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const { isLoggedIn, checkRole } = require("../middleware/route-guard")
const { isAdmin, isUser } = require("../utils")
const Product = require("../models/Product.model")
const User = require("../models/User.model")
const { Router } = require("express")
const saltRounds = 10


// EDITAR NOMBRE DE USUARIO ////////////////
router.get("/perfil", isLoggedIn, checkRole("USER"), (req, res, next) => {
    const id = req.session.currentUser._id

    User
        .findById(id)
        .then(user => {
            res.render("user/user-profile", user)
        })
        .catch(err => next(err))
})

router.post("/perfil", isLoggedIn, checkRole("USER"), (req, res, next) => {
    const id = req.session.currentUser._id
    const { username, passwordHash } = req.body
    console.log(req.body)

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(passwordHash, salt))
        .then(hashedPassword =>  User
            .findByIdAndUpdate(id, {username, passwordHash: hashedPassword}, { new: true }))
        .then(user => {
            console.log(user)
            res.redirect("/perfil")
        })
        .catch(err => next(err))
 })




 // CARRITO ////////////////
 router.get("/carrito", isLoggedIn, checkRole("USER"), (req, res, next) => {
     res.render("user/cart")
 })





module.exports = router