const mongoose = require("mongoose");

async function connect() {
try {
  mongoose.connect('process.env.DATABASE', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
setTimeout(function() {
  mongoose.connect('process.env.DATABASE');
}, 60000);

}
