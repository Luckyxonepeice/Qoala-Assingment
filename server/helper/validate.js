function Contain_INT(str) {
    
    const arr = str.split(' ').join('').split('');
    
    
    return arr.every(char => !isNaN(parseInt(char, 10)));
}

function Contain_ALPHA(str) {
    
    const stringWithoutSpaces = str.replace(/\s+/g, '').toLowerCase();
    
    return /^[a-zA-Z]+$/.test(stringWithoutSpaces);
}
function validate(data){
    const { idCardNumber,
            Name,
            Last_name,
            Date_of_birth,
            Date_of_issue,
            Date_of_Expiry
        } = data; 
    
    if(idCardNumber==='' || Name==='' || Date_of_birth==='' || Last_name===''
    || Date_of_issue==='' || Date_of_Expiry===''){
        return 'incomplete';
    }

    if(!Contain_INT(idCardNumber)) return 'wrongData';
    
    if(!Contain_ALPHA(Name) || !Contain_ALPHA(Last_name)) return 'Wrong-Data';
    
    return 'complete';

    
}

module.exports = {validate};