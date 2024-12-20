const repeatString = function(str, num) {
if (num < 0) {
    return 'ERROR';
}  else {
    // create array filled with repeated string
    let result = [];
    for (let i=0; i<num; i++) {
        result.push(str)
    }

    //join array into single string
    return result.join('');
    }
}
;

// Do not edit below this line
module.exports = repeatString;
