import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectToDatabase from './db/db.js';
const userRegister = async () => {
    connectToDatabase()
  try {
    const hashPassword = await bcrypt.hash("admin", 10); // Hashing the string "admin" with salt rounds = 10

    const newUser = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin"
    });

    await newUser.save(); // Save user to MongoDB
  } catch (error) {
    console.log(error); // Log any error that occurs
  }
};

userRegister(); // Function call to register the user



