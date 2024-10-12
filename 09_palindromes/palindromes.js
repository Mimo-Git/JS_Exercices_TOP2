const palindromes = function (str) {
    let arr = [];
    arr = str.split(/^[a-zA-Z0-9]+/);
    let newStr;
    for(let word of str){
        newStr += word;
    }
    for (let letter of newStr){
        arr.unshift(letter);
    }
    for(let letter of newStr){
        if (letter.toLowerCase() !== arr.at(-(newStr.indexOf(letter))-1).toLowerCase())
            return false;
    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
