const express=require('express')
const { addNewClient, getClients, getClient, updateClient, deleteClient, login } = require('../controlers/clientsControlers')
const ClientMiddleware = require('../middlewares/clientMiddlewars')
const Router=express.Router()


Router.post('/:id/newClient',addNewClient)

Router.post('/:idSec/newClient',addNewClient)

Router.post('/login',login)

Router.get('/',getClients)

Router.get('/:id/:idCl',getClient)

Router.put('/:id/:idCl',ClientMiddleware,updateClient)

Router.delete('/:idCl',deleteClient)





module.exports=Router