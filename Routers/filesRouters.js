const express = require("express");
const { addNewFile } = require("../controlers/filesControlers");
const lawyerMiddleware = require("../middlewares/lawyerMiddlewars");
const SecretaryMiddleware = require("../middlewares/secretariesMiddlewars");
const Router=express.Router()


Router.post('/:id/newFile',lawyerMiddleware,addNewFile)
Router.post('/:idSec/newFile',SecretaryMiddleware,addNewFile)

module.exports=Router