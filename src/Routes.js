const express = require("express")
const route = express.Router()

route.get("/", (req, res)=>{
    res.send({
        "API" : "API versão 0.1"
    })
})
module.exports = route