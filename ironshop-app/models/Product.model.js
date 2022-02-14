const { Schema, model } = require("mongoose");


const productSchema = new Schema(
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

const Product = model("Product", productSchema);

module.exports = Product;