const express = require('express')
const app = express()
require('dotenv').config()
const cors=require('cors')
const connectDB=require('./config/connectDB')

app.use(express.json())

app.use(cors())




app.use('/Lawyer',require('./Routers/lawyersRouters'))
app.use('/Secretary',require('./Routers/secretariesRouters'))
app.use('/Client',require('./Routers/clientsRouters'))
app.use('/File',require('./Routers/filesRouters'))

connectDB()
const PORT= process.env.PORT||4000
app.listen(PORT) 