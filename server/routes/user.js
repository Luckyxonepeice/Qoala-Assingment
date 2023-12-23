const express = require('express');
const {uploadImage} = require("../helper/multer");
const {CONFIG} = require('../vars/secure');
const vision= require('@google-cloud/vision');

const router = express.Router();

router.post('/add/adhaar',uploadImage.single("card"),(req,res)=>{
    
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

    const client = new vision.ImageAnnotatorClient(CONFIG);

    const filePath = file.path;

    const detectLandMark = async(filePath) =>{
        let [results] = await client.textDetection(filePath);
        const data = Array.from(results.textAnnotations);
        const text = data.map(item => item.description);

        console.log(text);
    }
    
    detectLandMark(filePath);

    res.send("ok");
})

module.exports= router;