const express = require('express')
const app = express ()


app.use(express.json())




app.use(require("./lib/routes/index"))
app.set("port", process.env.PORT || 3000)
app.listen(3000, () => console.log('listening on port 3000'))
