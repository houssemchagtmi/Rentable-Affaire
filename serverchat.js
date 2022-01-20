const express = require('express')
const appchat = express()
const cors=require('cors')
const http=require('http')
const {Server}=require('socket.io')
const server=http.createServer(appchat)
appchat.use(cors())



const socketIO=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
})

socketIO.on('connection',(connection)=>{

connection.on("enter_room",data=>{
    connection.join(data)
})
connection.on("send_message",data=>{
    connection.to(data.room).emit("receive_message",data)
})

    connection.on("disconnect",()=>{
    })
})
server.listen(4001)