/* If you can't figure this one out after a little while, ask for help.
 *
 * This one is a lot trickier than the previous two.  There are several ways to go about
 * doing this.  If you are interested in learning a whole lot about prime numbers, you can
 * go ahead and create what is called a "prime sieve", which is the fastest way to
 * generate prime numbers.  Your sieve will be very useful in future problems from project
 * euler, but it is overkill for this exact problem.
 *
 * I'll give you a few hints to get you started:
 *
 * The largest possible prime factor of any number, n, is sqrt( n ).  To find the square
 * root of a number in JavaScript:
 *
 *     var sqrt = Math.sqrt( num );
 *
 * All prime numbers other than 2 are odd
 *
 * Notice that my loop starts at 3, and the +=2 at the end increments i by 2 each time,
 * instead of 1 like you're used to.  This means that i becomes 5, 7, 9, etc...
 */

module.exports = function(){
	var i = 2;
	var target = 600851475143;
	while (target > i) {
		if (target % i === 0) {
			target = target / i;
		}
	i++;
	}
	return i
};