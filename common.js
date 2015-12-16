var names = ['Alice', 'Bob', 'Carol', 'Derik', 'Eve', 'Fred'];

function randInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Get a random arbitrary number, rounded to 2 decimal digits
function getRandomArbitrary(min, max) {
    return +(Math.random() * (max - min) + min).toFixed(2);
}

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
// Credit: http://stackoverflow.com/questions/4652468/is-there-a-javascript-function-that-reduces-a-fraction
function reduce(numerator, denominator) {
	var gcd = function gcd(a, b) {
		return b ? gcd(b, a%b) : a;
	};
	gcd = gcd(numerator, denominator);
	return [numerator/gcd, denominator/gcd];
}
