const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/futurama', { useNewUrlParser: true });



let mongoURI = ""

if(process.env.NODE_ENV==="production"){
    mongoURI = process.env.DB_URL
}else {
    mongoURI = "mongodb://localhost/futurama"
}

mongoose.connect(mongoURI, { useNewUrlParser: true });
module.exports = mongoose;