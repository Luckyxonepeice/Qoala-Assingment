const express = require("express");
const app = express();
const userRouter = require('./routes/user')
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config({path: "./vars/.env"});
require('./db/index')

app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();}
);

app.use(express.json());
app.use('/',userRouter);

let port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is Running ${port}`);
});
