const { Schema, model } = require('mongoose')

const reviewSchema = new Schema(
    {
        commentary: String,
        review: Boolean,// a base a que vamos a necesitar un true o un false en este caso?.
        // tendría sentido meter valoraciones? (estrellas de 1 a 5)
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

