const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController");

// Route for creating a new task
router.post("/createUser", UserController.createUser);


// Route for getting all tasks
// router.get("/users", UserController.getAllUsers);

module.exports=router