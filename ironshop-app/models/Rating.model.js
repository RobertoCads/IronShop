const { Schema, model } = require('mongoose')

const ratingSchema = new Schema(
    {
        comment: String,
        rating: {
            type: Number, min: 1 , max: 5
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product"
        }
    },
    {
        timestamps: true
    }
)


module.exports = model("Rating", ratingSchema)

