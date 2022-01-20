const mongoose=require('mongoose')
const {Schema}=mongoose;

const FeedBack=new Schema({
Name:{type:String},
Email: { type: String},
Subject: { type: String},
Message: { type: String},
authorId: { type: mongoose.Schema.Types.ObjectId, ref: "Lawyers"}
})

module.exports=mongoose.model('FeedBacks',FeedBack)