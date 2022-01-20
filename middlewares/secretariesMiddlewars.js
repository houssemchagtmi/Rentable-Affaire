var jwt = require('jsonwebtoken');
const Secretaries=require('../models/secretariesSchema')

const SecretaryMiddleware=async(req,res,next)=>{
    try {
        // req.headers['auth'] === req.headers.auth
        const token=req.headers['auth']
        if(!token){
            return res.json({message:'not authorized token'})
        } else {
            var decoded = await jwt.verify(token, process.env.privateKey)
            const Secretary=await Secretaries.findById(decoded.idSec)
            if (!Secretary){
                return res.json({message:'not authorized secretary'})
            }
            next()
        }
        
    } catch (error) {
        return res.json({message:error})
    }
}

module.exports=SecretaryMiddleware