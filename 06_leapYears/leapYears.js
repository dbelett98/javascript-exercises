const leapYears = function(year) {
    //check if year is divisible by 4 but not 100
    // or if it is divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
