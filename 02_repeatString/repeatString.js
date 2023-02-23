const repeatString = function(string, num) {
    if (num <0) {
        return "ERROR"
    }

    let count = 0;
    outputSTR = []
    while (count < num) {
        outputSTR.push(string);
        count++;
    }

    return outputSTR.join("");
};

// Do not edit below this line
module.exports = repeatString;
