function isEven(x) {
  if(x < 0)			// if the input is negative, change it to positive
    x *= -1;
  if(x == 0)		// if the input is zero, our number is even
    return true;
  else if(x == 1)	// if the input is one, our input is odd
    return false;
  else				// if the input isn't zero or one, subtract two and try again
    return isEven(x - 2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??