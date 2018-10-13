function add(numbers){

	if(numbers == ""){
		return 0;
	}

	if(numbers.includes(',')){
	var numberArray = numbers.split(',');		
		return sum(numberArray);
	}

	return parseInt(numbers);
}

function sum(array){
		var total = 0;
		for(var i = 0; i < array.length; i++){
			total += parseInt(array[i]);
		}
		return total;
}

module.exports = add;