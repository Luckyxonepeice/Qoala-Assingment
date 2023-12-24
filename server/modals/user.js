const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    idCardNumber:{
        type:String,
        //trim:true,
        //required:true,
    },

    Name:{
        type:String,
        //trim:true,
        //required:true,
    },

    Last_name:{
        type:String,
        //trim:true,
        //required:true,
    },

    Date_of_birth:{
        type:String,
        //required:true,
    },

    Date_of_issue:{
        type:String,
        //required:true,
    },

    Date_of_Expiry:{
        type:String,
        //required:true,
    },

    Status:{
        type:String,
        required:true,
    }

})

module.exports= mongoose.model("User",userSchema);