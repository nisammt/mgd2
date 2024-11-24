const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const  TodoModel = require('./src/models/todomodel')
const todorutes = require('./src/routes/todorutes')
dotenv.config({path: './.env'})
const port = process.env.PORT;
const dblink = process.env.DBLINK
async function main(){
    await mongoose.connect(dblink);
}
main()
.then(()=>{
    console.log("Db connected")
})
.catch(err=>{
    console.log(err)
})

const app = express()
app.use(express.json())
app.use('/',todorutes)




app.listen(port,()=>{

    console.log(`server running on port ${port}`)
})

