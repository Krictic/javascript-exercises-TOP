const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return "ERROR"
    } else if (typeof(start) != "number" || typeof(end) != "number") {
        return "ERROR"
    } else {

        // Had to look at the solution for this one.
        if (start > end) {
            const temp = start;
            start = end;
            end = temp;
          }

        let count = start;
        numArray = [];

        while (count <= end) {
            numArray.push(count)
            count++;
        }

        let result = numArray.reduce((a, b) => {
            return a + b;
        }, 0);

        return result
    }
    
    
};

function doSum(start, end) {
    
}

// Do not edit below this line
module.exports = sumAll;
