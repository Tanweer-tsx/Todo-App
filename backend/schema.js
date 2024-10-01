const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(10),
    description: zod.string().min(20)
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo, updateTodo
}