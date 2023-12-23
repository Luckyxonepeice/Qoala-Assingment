const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lakshaychauhan129:7lU0t9W74SH9GvlD@ocr-project.xklpy3g.mongodb.net/?retryWrites=true&w=majority").
then( ()=>{
    console.log("DB is connected");
}).catch( (err)=>{
    console.log("Error Found!", err);
})