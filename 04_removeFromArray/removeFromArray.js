const removeFromArray = function(arrayInit, ...args) {
 
    for (element of args){
        while(arrayInit.includes(element)){
            arrayInit = arrayInit.filter((elementRemoved) => elementRemoved !== element );
        }
    }
    
    return arrayInit;
};

// Do not edit below this line
module.exports = removeFromArray;
