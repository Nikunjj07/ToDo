//basic boillerplate code
const express = require("express")
const app = express()
const { createTodo,updateTodo } = require("./types")
const { todo } = require("./db")
const { default: mongoose } = require("mongoose")
const cors = require("cors")

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173"
}))

app.post("/todo",async (req,res)=>{//creating todo
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong input"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false
    })
    res.json({
        msg:"ToDo Created!"
    })
})

app.get("/todos",async(req,res)=>{//getting todos
    const todos =await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async(req,res)=>{//marking as done
    const updatePayload = req.body;
    const parsedUpdatePayload = updateTodo.safeParse(updatePayload);
    if(!parsedUpdatePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed : true
    })
    res.json({
        msg:"Your todo is updated"
    })
})

app.listen(3000,()=>{console.log("Server Started!")});