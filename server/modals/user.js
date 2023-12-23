const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type:String,
        trim:true,
        required:true,
    },

    first_name:{
        type:String,
        trim:true,
        required:true,
    },

    last_name:{
        type:String,
        trim:true,
        required:true,
    },

    dob:{
        type:String,
        required:true,
    },

    issue_date:{
        type:String,
        required:true,
    },

    expiry_date:{
        type:String,
        required:true,
    }

})

module.exports= mongoose.model("User",userSchema);