const mongoose=require('mongoose')
const {Schema}=mongoose

const ClientsSchema=new Schema({
    Firstname:{type:String, required:true},
    Lastname:{type:String, required:true},
    // DateOfBirth:{type:Number, required:true},
    address:{type:String, required:true},
    zipCode:{type:Number, required:true},
    phone:{type:Number, required:true},
    // country:{type:String, required:true},
    // city:{type:String, required:true},
    // numCID: {type:Number, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    confirmePassword:{ type: String, required: true },
    cause:{type:String, required:true},
    listOfFiles:[{type:Schema.Types.ObjectId,ref:"files"}]


})

module.exports=mongoose.model('clients',ClientsSchema)