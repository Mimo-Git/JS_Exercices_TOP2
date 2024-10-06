const sumAll = function(nb1,nb2) {
    if (!(Number.isInteger(nb1) && Number.isInteger(nb2) && nb1 >= 0 && nb2 >= 0))
        return "ERROR";

    let res = 0;
    if (nb1 < nb2) {
        for (i=nb1; i<=nb2; i++) {
            res += i;
        } 
    } else if (nb1 > nb2) {
        for (i=nb2; i<=nb1; i++) {
            res += i;
        } 
    } else {
        res = nb1 + nb2;
    }

    return res;

};

// Do not edit below this line
module.exports = sumAll;
