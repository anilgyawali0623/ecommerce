import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import collectionRoutes from "./routes/collection.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
// console.log(process.env.MONGO_DB);
mongoose
  .connect(
    "mongodb+srv://anilgyawali:anilgyawali@cluster0.zvebt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongo db is connected");
  })
  .catch((err) => {
    console.log("error is ");
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("fasfa");
});

app.use("/collection", collectionRoutes);
app.use("/api/auth", authRoutes);
