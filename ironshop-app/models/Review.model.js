const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
    {
        commentary: String,
        review: {
            type: Number, min: 1 , max: 5
        },
        user: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }],
        product: [{
            type: Schema.Types.ObjectId,
            ref: "Products"
        }]
    },
    {
        timestamps: true
    }
)


module.exports = model("Review", reviewSchema)

