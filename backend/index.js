const express = require("express");
const { createTodo } = require("./schema");
const { todoModel } = require("./db");
const app = express();
const PORT = 3000;
app.use(express.json());

app.post("/addTodo", async function(req, res){
    const createNewTodo = req.body;
    const parsedNewTodo = createTodo.safeParse(createNewTodo);
    if(!parsedNewTodo.success){
        res.status(411).json({
            message: "You have sent the wrong input"
        })
        return
    }
    const createdTodo = await todoModel.create({
        title: createNewTodo.title,
        description: createNewTodo.description,
        completed: createNewTodo.completed
    })

    res.status(200).json({
        message: "Todo created",
        preview: createdTodo
    })
})

app.listen(PORT, () => {
    console.log(`Server initialised on port ${PORT}`);
})