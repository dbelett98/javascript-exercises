const sumAll = function(a, b) {
   // Check for non-number parameters 
   if (typeof a !== 'number' || typeof b !== 'number') { return 'ERROR'; } 
   // Check for non-integer parameters 
   if (!Number.isInteger(a) || !Number.isInteger(b)) { return 'ERROR'; } 
   // Check for negative numbers 
   if (a < 0 || b < 0) { return 'ERROR'; } 
   // Ensure a is less than or equal to b 
   if (a > b) [a, b] = [b, a]; 
   // Calculate the sum of every integer between a and b 
   let sum = 0; for (let i = a; i <= b; i++) { sum += i; } return sum;
}
;

// Do not edit below this line
module.exports = sumAll;
