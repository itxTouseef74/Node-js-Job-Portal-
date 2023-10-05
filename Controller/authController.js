const userModel = require("../Model/userModel");

const userController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).send({
        message: "Plz provide name",
        success: false,
        error,
      });
    }
    if (!email) {
      return res.status(400).send({
        message: "Plz provide email",
        success: false,
        error,
      });
    }
    if (!password) {
      return res.status(400).send({
        message: "Plz provide password",
        success: false,
        error,
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        message: "Email already exists plz login ",
        success: false,
      });
    }

    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      message: "User Created Successfully ",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Error in Register controller",
      success: false,
      error,
    });
  }
};

module.exports = userController;
