import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
 export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if ([username, email, password].some((val) => val === "")) {
    return res.status(400).json({ message: "all field must be feild" });
  }
    const existedUser= await User.findOne({

        $or:[{username}, {email}]
    })

     if(existedUser){
         return res.status(401).json({message:"username or email already exist"})
     }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });
  console.log(username,hashedPassword, email)
  try {
    await newUser.save();
    res.json({ message: "signup successfull" });
  } catch (error) {
    res.status(401).json({ message: "signup failure" });
  }
};

