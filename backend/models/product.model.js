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
  mainImage: {
    type: String,
    required: true,
  },
  additionalImages: {
    type: [String], // Array of image URLs
    default: [],
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
    default: 0,
  },
  rating: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("Product", product);
export default Product;
