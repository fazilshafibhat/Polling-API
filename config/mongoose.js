const mongoose = require("mongoose");
mongoose.connect('mongodb://0.0.0.0:27017/Polling_API')
// mongoose.connect('mongodb+srv://fazilshafi:12345678mno@cluster0.shww24v.mongodb.net/?retryWrites=true&w=majority')


const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;
