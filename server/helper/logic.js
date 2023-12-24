const {
    CONFIG
} = require('../vars/secure');
const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandMark = async (filePath) => {
    let [results] = await client.textDetection(filePath);
    const val = Array.from(results.textAnnotations);
    const text = val.map(item => item.description);

    

    const regex = /[a-zA-Z0-9]+/g;

    const data = [];
    
    let match;
    while ((match = regex.exec(text)) !== null) {
        data.push(match[0]);
    }

    //console.log(data);
    let extractedInfo = {
        idCardNumber:'',
        Name:'',
        Last_name:'',
        Date_of_birth:'',
        Date_of_issue:'',
        Date_of_Expiry:''

    };
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'Thai' && data[i + 1] === 'National' && data[i + 2] === 'ID' && data[i + 3] === 'Card') {
            extractedInfo={
                ...extractedInfo,
                idCardNumber: `${data[i + 4]} ${data[i + 5]} ${data[i + 6]} ${data[i + 7]} ${data[i+8]}`
            }
        }
        else if(data[i]==='Name'){
            extractedInfo={
                ...extractedInfo,
                Name: `${data[i + 1]} ${data[i+2]}` 
            }
        }

        else if(data[i]=='Last' && data[i+1]=='name'){
            extractedInfo={
                ...extractedInfo,
                Last_name: `${data[i + 2]}` 
            }
        }

        else if(data[i]=='Date' && data[i+1]=='of' && data[i+2]=='Birth'){
            extractedInfo={
                ...extractedInfo,
                Date_of_birth:`${data[i+3]} ${data[i+4]} ${data[i+5]}`
            }
        }

        else if(data[i]=='Date' && data[i+1]=='of' && data[i+2]=='Issue'){
            extractedInfo={
                ...extractedInfo,
                Date_of_issue:`${data[i-3]} ${data[i-2]} ${data[i-1]}`
            }
        }
        else if(data[i]=='Date' && data[i+1]=='of' && data[i+2]=='Expiry'){
            extractedInfo={
                ...extractedInfo,
                Date_of_Expiry:`${data[i-3]} ${data[i-2]} ${data[i-1]}`
            }
        }
    }
    console.log(extractedInfo);
    return extractedInfo;
}

module.exports = {detectLandMark};