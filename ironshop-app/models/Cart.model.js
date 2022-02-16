const { Schema, model } = require('mongoose')

const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        product: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }]
    },
    {
        timestamps: true
    }
)

module.exports = model("Cart", cartSchema)