const sumAll = function(a, b) {
    if (Number.isInteger(a) === false || Number.isInteger(b) === false || a < 0 || b < 0) {
        return "ERROR";
    }
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    res = 0;
    for (let i = a; i <= b; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
