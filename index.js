const express = require('express')
const app = express ()
const cors = require("cors");

app.use(express.json())
app.use(parser.json());
app.use(cors())



app.use(require("./lib/routes/index"))
app.set("port", process.env.PORT || 3000)
app.listen(3000, () => console.log('listening on port 3000'))
