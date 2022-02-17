const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const { findOne } = require("../models/User.model")

const { isLoggedIn, checkRole } = require("../middleware/route-guard")
const {isAdmin, isUser} = require("../utils")

const User = require("../models/User.model")
const Cart = require("../models/Cart.model")
const saltRounds = 10


// SIGN UP /////////////////////
router.get("/registro", (req, res, next) => {
    res.render("auth/register", { hideNavbar: true })
})

router.post("/registro", (req, res, next) => {
    const { username, email, password} = req.body

    bcryptjs
        .genSalt(saltRounds)
        .then(salt => bcryptjs.hash(password, salt))
        .then(hashedPassword => User.create({ username, email, passwordHash: hashedPassword}))
        .then(user => {
            if(isUser(user)) {
                return Cart.create({ user: user._id, product: [] })
            }
            return
        })
        .then(() => res.redirect("/"))
        .catch(err => next(err))
})


// LOG IN /////////////////////
router.get("/iniciar-sesion", (req, res, next) => {
    res.render("auth/login", { hideNavbar: true })
})

router.post("/iniciar-sesion", (req, res, next) => {
    const { email, password } = req.body

    if (!email.length || !password.length) {
        res.render("auth/login", {errorMessage: "Rellena todos los campos"})
        return
    } 

    User
        .findOne({ email })
        .then(user => {
            if(!user) {
                res.render("auth/login", {errorMessage: "Email no registrado en la Base de Datos"})
                return
            } else if (bcryptjs.compareSync(password, user.passwordHash) === false) {
                res.render("auth/login", {errorMessage: "Contraseña Incorrecta"})
                return
            } else {
                req.session.currentUser = user
                req.app.locals.isLoggedIn = true
                req.app.locals.isUser = true
                req.app.locals.username = user.username
                
                if (isAdmin(user)) {
                    req.app.locals.isAdmin = true
                    res.redirect("/admin")
                } else {
                    req.app.locals.isAdmin = false
                    res.redirect("/")
                }
                
            }
        })
        .catch(err => next(err))
})



// LOG OUT /////////////////////
router.post("/cerrar-sesion", (req, res) => {
    req.app.locals.isLoggedIn = false
    req.app.locals.isAdmin = false
    req.app.locals.isUser = false
    req.app.locals.username = undefined
    req.session.destroy(() => res.redirect("/iniciar-sesion"))
})

module.exports = router