const TodoModel = require("../models/todomodel")

const getalltodus =  async (req, res)=>{
 let todu = await TodoModel.find({})
 res.status(200).json(todu)
}

const toduspostall = (req, res)=>{
      
    const todu = new TodoModel(req.body)
    console.log(req.body)
    todu.save()
    res.send('Todo Add successfully')
      
}

const changetodo =(req, res)=>{

    let id = req.params.id
    let newtodo = req.body
    TodoModel.findByIdAndUpdate(id,newtodo).exec()
    res.send('Todo edited succssfuly')
}

const deletetodo =(req,res)=>{
    let id = req.params.id
    TodoModel.findByIdAndDelete(id).exec()
    res.send('Todo deleted succesfully')
}

module.exports={getalltodus, toduspostall, changetodo, deletetodo}