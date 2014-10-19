/* You shouldn't need any additional tools for this problem.  As a brief reminder,
 * to check if a number is even, you can write:
 *
 *     if( num % 2 === 0 ){
 *     }
 *
 * The one thing that might trip you up is that you will have to swap values from one
 * variable to another, e.g.:
 *
 *     var a = 10;
 *     var b = 20;
 *
 *     a = b;
 *     // a and b are now both 20
 */

module.exports = function(){
	var iCurrent = 1;
	var iPrevious = 0;
	var sum = 0;
	var iTemp;
	var ceiling = 4000000;

	while(iCurrent < ceiling){
		iTemp = iCurrent;
		iCurrent += iPrevious;
		iPrevious = iTemp;

		if(iCurrent % 2 === 0){
			sum += iCurrent;
		}
	}
	return sum;
};