import mongoose from "mongoose";

const product = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
  },
  ingredient: {
    type: [String],
    requried: true,
  },
  brand: {
    type: String,
    requried: true,
  },
  body: {
    type: String,
    requried: true,
  },
  totalSold: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});

const Product = mongoose.model("Product", product);
export default Product;
