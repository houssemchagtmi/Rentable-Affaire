const Files = require("../models/filesSchema")
const Lawyer = require('../models/lawyersSchema');
const Secretaries = require('../models/secretariesSchema');

const addNewFile=async(req,res)=>{
    try {
        const newFile=new Files(req.body)
        await newFile.save()
        await Lawyer.findByIdAndUpdate(req.body.id,{$push:{listOfFiles:newFile}})
        await Secretaries.findByIdAndUpdate(req.body.idSec,{$push:{listOfFiles:newFile}})
        return res.json({message:"file added successfully",newFile})

    } catch (error) {
        
    }
}


module.exports={addNewFile}