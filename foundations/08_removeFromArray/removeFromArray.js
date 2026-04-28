const removeFromArray = function(array, ...theArgs) {
    const res = array.filter((num) => {for (let i = 0; i < theArgs.length; i++) {if (num === theArgs[i]) {return false;}} return true;});
    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
