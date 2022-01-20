var jwt = require('jsonwebtoken');
const Lawyers=require('../models/lawyersSchema')

const lawyerMiddleware=async(req,res,next)=>{
    try {
        // req.headers['auth'] === req.headers.auth
        const token=req.headers['auth']
        if(!token){
            return res.json({message:'not authorized token'})
        } else {
            var decoded = await jwt.verify(token, process.env.privateKey)
            const Lawyer=await Lawyers.findById(decoded.id)
            if (!Lawyer){
                return res.json({message:'not authorized lawyer' })
            }
            next()
        }
        
    } catch (error) {
        return res.json({message:error})
    }
}

module.exports=lawyerMiddleware