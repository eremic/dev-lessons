module.exports = function(){
	var total = 0;
	function sumofsquares(max) {
		var squaresumtotal = 0;
		for (i =  1; i <= max; i++) {
			squaresumtotal += (i*i);
		} return squaresumtotal;
	};

	function squareofsums(max) {
		var sumsquaretotal = 0;
		for (i = 1; i <= max; i++) {
			sumsquaretotal += i;
		} 
		return (sumsquaretotal * sumsquaretotal);
	};

	return ((squareofsums(100) - sumofsquares(100)));
};