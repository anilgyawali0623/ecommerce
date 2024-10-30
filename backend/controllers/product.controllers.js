import { errorHandler } from "../utils/error.js";
import Product from "../models/product.model.js";
export const productInfo = async (req, res, next) => {
  const {
    title,
    gender,
    description,
    newPrice,
    oldPrice,

    brand,
    body,
  } = req.body;

  if (
    [title, gender, description, newPrice, oldPrice, brand, body].some(
      (val) => val === ""
    )
  ) {
    return next(errorHandler(400, "please enter all the details"));
  }

  const ingredient = req.body.ingredient.split(" ");

  const newProduct = new Product({
    ...req.body,
    ingredient,
  });

  try {
    const savedPoduct = await newProduct.save();
    res.status(201).json(savedPoduct);
  } catch (error) {
    next(error);
  }
};
