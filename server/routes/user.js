const express = require('express');
const {uploadImage} = require("../helper/multer");
const {detectLandMark} = require('../helper/logic')
const {validate} = require('../helper/validate');
const User = require('../modals/user')
const {isValidObjectId} = require("mongoose");
const user = require('../modals/user');

const router = express.Router();

router.post('/add/card',uploadImage.single("card"),async (req,res)=>{
    
    const {file}= req;
    if(!file){
        res.send({
            error:"Include the Image"
        })
    }
    const imageSizeInBytes = req.file.size;

    const imageSizeInKB = (imageSizeInBytes / 1024).toFixed(2);
    const imageSizeInMB = (imageSizeInKB / 1024).toFixed(2);

    if(imageSizeInMB>2){
        return res.send({
            error:"Image size Exceed 2 MB",
        })
    }
    const filePath = file.path;
    const data = await detectLandMark(filePath);
    const status = await validate(data);
    const result = {...data,Status:status};
    
    const card_info =  new User({...result});
    await card_info.save();
    res.status(201).json({
        card:card_info,
    });
});

router.get('/get/card', async(req, res)=>{

    const result = await User.find({});
    //console.log(result);
    
    res.json({result:result});
})

router.post('/update/card/:cardId', async(req,res)=>{

   
    const { idCardNumber,
        Name,
        Last_name,
        Date_of_birth,
        Date_of_issue,
        Date_of_Expiry
    }=req.body;

    //console.log(req.body);

    const {cardId} = req.params;
    //console.log(cardId);
    if(!isValidObjectId(cardId)) return res.json({error:"Not Valid ID!"});

    const card = await User.findById(cardId);

    if(!card){
        return res.json({
            error:"Not Found!!",
        })
    }

    card.Name=Name;
    card.idCardNumber=idCardNumber;
    card.Date_of_Expiry=Date_of_Expiry;
    card.Date_of_birth=Date_of_birth;
    card.Date_of_issue=Date_of_issue;
    card.Last_name=Last_name;

    await card.save();

    res.status(201).json({result:card});

})

router.delete('/delete/card/:cardId', async(req,res)=>{

    const {cardId}= req.params;
    if(!isValidObjectId(cardId)) return res.json({error:"Not Valid ID!"});

    const card = User.findById(cardId);

    if(!card){
        return res.json({
            error:"Record Not Found!!"
        })
    }

    await User.findByIdAndDelete(cardId);

    res.json({message:"Removed SuccessFully"});

})
module.exports= router;