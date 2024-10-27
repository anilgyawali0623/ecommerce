// import nodemailer from "nodemailer";

// let transporter = nodemailer.createTransport({
//   service: 'gmail', // You can use 'Yahoo', 'Outlook', or custom SMTP server
//   auth: {
//     user: 'anilgyawali38@gmail.com', // Your email
//     pass: 'atkh eqpe xdga cijb' // Your email password or App Password
//   }
// });

// let mailOptions = {
//   // from: 'anilgyawali38@gmail.com', // Sender's email
//   // to: 'anilgyawali244@gmail.com', // List of recipients
//   subject: 'Hello from rqwrqwrNodemailer', // Subject line
//   text: 'This is a plain faefqwfqwtext email.', // Plain text body

// };

// transporter.sendMail(mailOptions, (error, info) => {
//    console.log("fasfasf")
//   if (error) {
//     return console.error('Error sending email:', error);
//   }
//    console.log("email", info);
// })

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
