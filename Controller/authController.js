const userModel = require("../Model/userModel");


// next is defined for middleware if we dont define next than all commented functions should be used 
// i have removed try catch in bcz now i have used express-asyn-error pkg by this this error provide try catch funtion itsel 
const userController = async (req, res , next ) => {
  // try {
    const { name, email, password } = req.body;

    if (!name) {
      next('Plz provide name')
      // return res.status(400).send({
      //   message: "Plz provide name",
      //   success: false,
      //   error,
      // });
    }
    if (!email) {
      next('Plz provide email')
      // return res.status(400).send({
      //   message: "Plz provide email",
      //   success: false,
      //   error,
      // });
    }
    if (!password) {
      next('Plz provide password')
      // return res.status(400).send({
      //   message: "Plz provide password",
      //   success: false,
      //   error,
      // });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      next('Email already exists plz login')
      // return res.status(200).send({
      //   message: "Email already exists plz login ",
      //   success: false,
      // });
    }

    const user = await userModel.create({ name, email, password });
    res.status(201).send({
      message: "User Created Successfully ",
      success: true,
      user,
    });
  // } catch (error) {
    console.log(error);
   next(error)
    // res.status(400).send({
    //   message: "Error in Register controller",
    //   success: false,
    //   error,
    // });
  }
// };

module.exports = userController;
