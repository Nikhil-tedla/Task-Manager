var express=require('express');

const { protect, adminOnly } = require('../Middleware/authMiddleware');
const { getUsers, getUserById, deleteUserById } = require('../controllers/userControllers');
var userRoutes=express.Router();

  
userRoutes.get("/",protect,adminOnly,getUsers)
.get("/:id",protect,getUserById)
.delete("/:id",protect,adminOnly,deleteUserById);

module.exports=userRoutes;
