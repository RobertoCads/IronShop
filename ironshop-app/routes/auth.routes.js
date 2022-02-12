const router = require("express").Router()
const bcryptjs = require("bcryptjs")

const User = require("../models/User.model")
const saltRounds = 10


// SIGN UP /////////////////////
router.get("/registro", (req, res, next) => {
    res.render("auth/register")
})






// LOG IN /////////////////////
router.get("/iniciar-sesion", (req, res, next) => {
    res.render("auth/login")
})






// LOG OUT /////////////////////

module.exports = router