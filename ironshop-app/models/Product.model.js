const { Schema, model } = require("mongoose");


const productSchema = new Schema(
    {
        name: String,
        description: String,
        price: String,
        image: String,
        category: {
            type: String,
            enum: ["Botella", "Camiseta", "Sudadera", "Taza", "Pegatina"]
        }
    },
    {
        timestamps: true
    }
)

const Product = model("Product", productSchema);
Product.syncIndexes()
module.exports = Product;