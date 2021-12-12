const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://root:root@cluster0-shard-00-00.j7arf.mongodb.net:27017,cluster0-shard-00-01.j7arf.mongodb.net:27017,cluster0-shard-00-02.j7arf.mongodb.net:27017/boot?ssl=true&replicaSet=atlas-jq3oz3-shard-0&authSource=admin&retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
const blocRouter = require('./routes/blocs')
app.use('/blocs',blocRouter)
const salleRouter = require('./routes/salles')
app.use('/salles',salleRouter)



app.listen(9000, () => {
    console.log('Server started')
})