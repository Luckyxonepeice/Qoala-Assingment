const express = require('express');
const {uploadImage} = require("../helper/multer");
const {detectLandMark} = require('../helper/logic')
const {validate} = require('../helper/validate');

const router = express.Router();

router.post('/add/adhaar',uploadImage.single("card"),async (req,res)=>{
    
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
    console.log(status);
    res.send("ok");
})

module.exports= router;