const repeatString = function(str, num = Math.floor(Math.random() * 1000)) {
    let finalString= "";
    if (num < 0){
        return "ERROR"
    }else{
        for (let i = 0; i < num; i++) {
            finalString += str;
        }
    }
    
    return finalString;


};

module.exports = repeatString;
