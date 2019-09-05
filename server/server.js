const express = require('express')
const ctrl = require("./controller/controller")

const app = express()

app.use(express.json())

const baseUrl = "/api/messages"
app.post(baseUrl, ctrl.create)
app.get(baseUrl, ctrl.read)
app.put(`${baseUrl}/:id`, ctrl.update)
app.delete(`${baseUrl}/:id`, ctrl.delete)

let port = 3010;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})