const reverseString = function(str) {
    let result = "";
    for (i = str.length -1; i >= 0; i--){
        result += str[i];
    }
    return result;

};

module.exports = reverseString;
