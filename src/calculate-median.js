function calculate_median(arr) {
	//请勿改动函数名
	var median = 0;
	if (arr.length >= 2) {
		var evenThElements = [];
		for (var i = 1, length = arr.length; i < length; i+=2) {
			evenThElements.push(arr[i]);
		}
		var middleIndex = Math.round(evenThElements.length / 2) - 1;
		if (evenThElements.length % 2 == 0) {
			median = (evenThElements[middleIndex] + evenThElements[middleIndex+1]) / 2;
		}else{
			median = evenThElements[middleIndex];
		}
	}    
	return median;
}

module.exports = calculate_median;
