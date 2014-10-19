/* This one can be done with paper and pencil if you feel so inclined :)
 */

module.exports = function(){
	var value = 0;
	var i = 1;
	var maxDivisor = 20;
	var found = false;

	while (found === false) {
		value += maxDivisor;

		while ( value % i === 0 && i <= maxDivisor) {
			if (i === maxDivisor) {
				found = true;
			}
			i++;
		}
		i = 1;
	}
	return value;
};