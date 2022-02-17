const isAdmin = user => user.role === "ADMIN"
const isUser = user => user.role === "USER"

const totalPrice = cart => cart.reduce((acc, elem) => {
    return Number(elem.price) + acc
}, 0)



module.exports = { isAdmin, isUser, totalPrice }