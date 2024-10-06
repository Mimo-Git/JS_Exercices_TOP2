const reverseString = function(sentence) {
    
    let tabInit = sentence.split("");
    let tabRes = [];
    let sentenceReversed = ""
    for(i=tabInit.length-1; i>=0; i--){
        tabRes.push(tabInit.at(i));
    }
    for (i=0; i<tabRes.length; i++){
        sentenceReversed += tabRes.at(i);
    }
    return sentenceReversed;

};

// Do not edit below this line
module.exports = reverseString;
