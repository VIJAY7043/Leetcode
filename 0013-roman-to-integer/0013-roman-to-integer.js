/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { 
    // Object declaration 
    var str = {
        "I": 1,  
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    // Initialize result variable
    let result = 0;

    // Loop through the string
    for (let i = 0; i < s.length; i++) {
        let currVal = str[s[i]];
        let nextVal = str[s[i + 1]];

        if (nextVal > currVal) {
            result += nextVal - currVal;
            i++; // Move to the next character as it has been considered in subtraction
        } else {
            result += currVal;
        }
    }

    return result;
};

// Example usage
var romannumber1 = "XII";
var romannumber2 = "LVIII";
var romannumber3 = "MCMXCIV";

var result1 = romanToInt(romannumber1);
var result2 = romanToInt(romannumber2);
var result3 = romanToInt(romannumber3);

console.log(result1);
console.log(result2);
console.log(result3);
