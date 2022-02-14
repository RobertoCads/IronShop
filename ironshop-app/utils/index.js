const isAdmin = user => user.role === "ADMIN"
const isUser = user => user.role === "USER"


module.exports = { isAdmin, isUser }