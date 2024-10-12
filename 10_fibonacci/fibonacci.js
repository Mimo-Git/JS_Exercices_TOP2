const fibonacci = function fib(n1) {
    n = parseInt(n1, 10);
    let res = 0;
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    if (n>1){
        res = fib(n-1) + fib(n-2)
        return res;
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
