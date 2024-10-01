const mongoose = require('mongoose');

try {
    mongoose.connect("mongodb+srv://tanweerjamal833:dIzbWArc33IXPLm4@test.ldkxw.mongodb.net/TodoApp")
    console.log("Database connected")
} catch (error) {
    console.log(error)
}

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: String,
        default: false
    }
})

const todoModel = mongoose.model('todo', todoSchema);

module.exports = {
    todoModel
}
