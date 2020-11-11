const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/futurama', { useNewUrlParser: true });

module.exports = mongoose;
