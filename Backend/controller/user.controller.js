const User = require("../model/user.model");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hasPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      name: name,
      password: hasPassword,
      email: email,
    });

    await createUser.save();

    return res.status(201).json({
      message: "User created successfully",
      user: {
        _id: createUser._id,
        name: createUser.name,
        // password: createUser.password,
        email: createUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!user || !isMatch) {
      return res.status(400).json({
        message: "user not find",
      });
    } else {
      return res.status(200).json({
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
module.exports = {
  signUp,
  login,
};
