const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.redirect("/iniciar-sesion"), {
        errorMessage: "Identifícate para acceder"
    }
}

const checkRole = (...admittedRoles) => (req, res, next) => {
    if(admittedRoles.includes(req.session.currentUser.role)) {
        next()
    } else {
        req.session.destroy(() => res.redirect("/iniciar-sesion"))
        {errorMessage: "No tienes los permisos necesarios"}
    }
}

module.exports = { isLoggedIn, checkRole }