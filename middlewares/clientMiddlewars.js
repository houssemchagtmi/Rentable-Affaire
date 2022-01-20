var jwt = require('jsonwebtoken');
const Clients=require('../models/clientsSchema')

const ClientMiddleware=async(req,res,next)=>{
    try {
        // req.headers['auth'] === req.headers.auth
        const token=req.headers['auth']
        if(!token){
            return res.json({message:'not authorized token'})
        } else {
            var decoded = await jwt.verify(token, process.env.privateKey)
            const Client=await Clients.findById(decoded.idCl)
            if (!Client){
                return res.json({message:'not authorized client'})
            }
            next()
        }
        
    } catch (error) {
        return res.json({message:error})
    }
}

module.exports=ClientMiddleware