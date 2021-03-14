const express = require("express")
const route = require("./Routes")
var app = express()
const PORT = 3500

app.use(route)
app.listen(PORT, ()=>{
    console.log("API rodando na porta : ", PORT)
})