const express = require("express");
const app = express();
const PORT = 3000;
app.use(json());

app.post("/addTodo", function(req, res){

})

app.listen(PORT, () => {
    console.log(`Server initialised on port ${PORT}`);
})