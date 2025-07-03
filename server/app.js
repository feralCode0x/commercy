/* 

================== Most Important ==================
* Issue 1 :
In uploads folder you need create 3 folder like bellow.
Folder structure will be like: 
public -> uploads -> 1. products 2. customize 3. categories
*** Now This folder will automatically create when we run the server file

* Issue 2:
For admin signup just go to the auth 
controller then newUser obj, you will 
find a role field. role:1 for admin signup & 
role: 0 or by default it for customer signup.
go user model and see the role field.

*/

require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const connect = mongoose;
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

// Import Router
const authRouter = require("./routes/auth");
const categoryRouter = require("./routes/categories");
const productRouter = require("./routes/products");
const brainTreeRouter = require("./routes/braintree");
const orderRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const customizeRouter = require("./routes/customize");
// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");
const CreateAllFolder = require("./config/uploadFolderCreateScript");
const https = require('https');
const http = require('http');
const fs = require('fs');
const express = require("express");
const cors = require("cors");
//const hostname = '100.115.92.206';
//const hostname = '100.115.92.193'
const port = 8000;

const options = {  
  key: fs.readFileSync('../client/cert/commercy.classisfoto.com+5-key.pem'),
  cert: fs.readFileSync('../client/cert/commercy.classisfoto.com+5.pem'),
  hostname: 'https://100.115.92.206:8000',
  port: 8000,
};

const app = express();

http.createServer(app).listen(80);
https.createServer(options, app).listen(port, 443);

/* Create All Uploads Folder if not exists | For Uploading Images */
CreateAllFolder();

process.env.NODE_ENV === 'production'

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
  });

/*app.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});*/


// Middleware 
app.use(cors()); // Apply CORS middleware
app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api", brainTreeRouter);
app.use("/api/order", orderRouter);
app.use("/api/customize", customizeRouter);

app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})
app.disable('etag');

/*if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));*/
  // Handle React routing, return all requests to React app


// Database Connection
async function connectDB() {
    try {
    await mongoose.connect(process.env.DATABASE, {
    
  }).then(() =>
    console.log(
      "==============Mongodb Database Connected Successfully=============="
    )
  ).catch((err) => console.log("Database Not Connected !!!"));
} catch(error) {
    console.error('Error connercting to MongoDB', error);
    }
}
connectDB();



// Run Server
/*const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});*/