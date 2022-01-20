const express=require('express')
const { addNewLawyer, getLawyers, getLawyer, updateLawyer, deleteLawyer, login } = require('../controlers/lawyersControlers')
const LawyerMiddleware = require('../middlewares/lawyerMiddlewars')
const Router=express.Router()


Router.post('/newLawyer',addNewLawyer)

Router.post('/login',login)

Router.get('/',getLawyers)

Router.get('/:id',getLawyer)

Router.put('/:id',LawyerMiddleware,updateLawyer)

Router.delete('/:id',LawyerMiddleware,deleteLawyer)





module.exports=Router