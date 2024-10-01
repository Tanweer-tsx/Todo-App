const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.DATABASE_URL)
    console.log("Database connected")
} catch (error) {
    
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
