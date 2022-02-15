const isLoggedIn = (req, res, next) => {
    req.session.currentUser ? next() : res.render("auth/login"), {
        errorMessage: "Identifícate para acceder"
    }
}

const checkRole = (...admittedRoles) => (req, res, next) => {
    admittedRoles.includes(req.session.currentUser.role) ? next() : res.render("auth/login"), {
        errorMessage: "No tienes los permisos necesarios"
    }
} 

module.exports = { isLoggedIn, checkRole }