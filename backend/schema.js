const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().minLength(10),
    description: zod.string().minLength(20)
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo, updateTodo
}