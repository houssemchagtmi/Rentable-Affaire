const express=require('express')
const { addNewSecretary, login, getSecretaries, getSecretary, updateSecretary, deleteSecretary } = require('../controlers/secretariesControlers')
const SecretaryMiddleware = require('../middlewares/secretariesMiddlewars')
const Router=express.Router()


Router.post('/:id/newSecretary',addNewSecretary)

Router.post('/login',login)

Router.get('/',getSecretaries)

Router.get('/:idSec',getSecretary)

Router.put('/:idSec',SecretaryMiddleware,updateSecretary)

Router.delete('/:idSec',deleteSecretary)





module.exports=Router