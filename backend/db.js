const mongoose = require("mongoose")
const { string, boolean } = require("zod")
url = "mongodb+srv://user:user@cluster0.xxuhzmu.mongodb.net/todo"
mongoose.connect(url)
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("todo",todoSchema)

module.exports = {
    todo
}