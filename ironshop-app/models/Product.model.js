const { Schema, model } = require("mongoose");

const productSchema = new Schema(
<<<<<<< HEAD
    {
        name: String,
        description: String,
        price: String,
        image: String,
        category: {
            type: String,
            enum: ["Botella", "Camiseta", "Sudadera", "Taza", "Pegatina"]
        }
=======
  {
    name: String,
    description: String,
    price: String,
    image: String,
    category: {
      type: String,
      enum: ["Botella", "Camiseta", "Sudadera", "Taza", "Pegatina"],
>>>>>>> admin
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);
<<<<<<< HEAD
Product.syncIndexes()
module.exports = Product;
=======
Product.syncIndexes();
module.exports = Product;
>>>>>>> admin
