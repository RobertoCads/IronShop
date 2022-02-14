const { Schema, model } = require("mongoose");


const productsSchema = new Schema(
    {
        name: String,
        description: String,
        price: String,
        image: String
    },
    {
        timestamps: true
    }
)

const Products = model("Products", productsSchema);

module.exports = Products;