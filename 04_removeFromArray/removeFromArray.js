// Incomplete ssoloution, passes only the basic test.

const removeFromArray = function(arr, item) {
    index = arr.indexOf(item)

    if (arr.includes(item)) {
        const x = arr.splice(index, 1)
    } else {
        return "";
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
