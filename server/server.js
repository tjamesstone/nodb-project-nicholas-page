const express = require('express')
const ctrl = require("./controller/controller")
// const likesctrl = require("./controller/likesctrl")

const app = express()

app.use(express.json())

const baseUrl = "/api/messages"
app.post(baseUrl, ctrl.create)
app.get(baseUrl, ctrl.read)
app.put(`${baseUrl}/:id`, ctrl.update)
app.delete(`${baseUrl}/:id`, ctrl.delete)

// app.get("/api/likes", likesctrl.get)
// app.put("/api/likes", likesctrl.put)

let port = 3010;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})