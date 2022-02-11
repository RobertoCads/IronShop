const { Schema, model } = require("mongoose");


const userSchema = new Schema(
  {
    username: {
      type: String,
      minlength: [4, "El nombre de usuario tiene que tener mínimo 4 caracteres"],
      trim: true,
      required: [true, "Indica el nombre de usuario"],
      unique: true
    },
    email: {
      type: String,
      required: [true, "Indica el email"],
      unique: true,
      lowercase: true,
      trim: true

    },
    passwordHash: {
      type: String,
      required: [true, "Indica la contraseña"]
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    },
    creditCard: {
      number: {
        type: Number,
        minlength: [16, "Introduce los números de tu tarjeta correctamente"],
        maxlength: [16, "Introduce los números de tu tarjeta correctamente"]
      },
      month: {
        type: Number,
        minlength: [2, "Introduce el mes correctamente"],
        maxlength: [2, "Introduce el mes correctamente"]
      },
      year: {
        type: Number,
        minlength: [2, "Introduce el año correctamente"],
        maxlength: [2, "Introduce el año correctamente"]
      },
      cvc: {
        type: Number,
        minlength: [3, "Introduce tu CVC correctamente"],
        maxlength: [3, "Introduce tu CVC correctamente"]
      },
      country: String,
      postalCode: {
        type: Number,
        minlength: [5, "Introduce tu codigo postal correctamente"],
        maxlength: [5, "Introduce tu codigo postal correctamente"]
      }
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
