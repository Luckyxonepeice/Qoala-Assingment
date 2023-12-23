const express = require("express");
const vision= require('@google-cloud/vision')
const app = express();
const {CONFIG} = require('./vars/secure');

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandMark = async(filePath) =>{
    let [results] = await client.textDetection('test.jpeg');
    console.log(results.textAnnotations)
}

detectLandMark();
app.listen(5000, () => {
  console.log("Server is Running");
});
