require("dotenv/config")

require("./db")

const express = require("express")

const hbs = require("hbs")

const app = express()

require("./config")(app)
require("./config/session.config")(app)

app.locals.appTitle = "IronShop"

const index = require("./routes/index")
app.use("/", index)

const auth = require("./routes/auth.routes")
app.use("/", auth)

const user = require("./routes/user.routes")
app.use("/", user)

const admin = require("./routes/admin.routes")
app.use("/admin", admin)

require("./error-handling")(app)

module.exports = app
