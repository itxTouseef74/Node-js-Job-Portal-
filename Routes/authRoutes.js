const express = require("express");
const userController = require("../Controller/authController");
const router = express.Router();

router.post("/register", userController);

module.exports = router;
