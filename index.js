const express = require('express')
const app = express ()


app.use(express.json())




app.use(require("./lib/routes/index"))

app.listen(3000, () => console.log('listening on port 3000'))
