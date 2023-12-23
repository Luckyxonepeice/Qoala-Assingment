const express = require("express");
const app = express();
const userRouter = require('./routes/user')
require('./db/index')


app.use('/',userRouter);

app.listen(5000, () => {
  console.log("Server is Running");
});
