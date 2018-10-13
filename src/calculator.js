function add(numbers){

	//if no value is sent to function it will return a zero as default
	if(numbers == ""){
		return 0;
	}

	//if the string contains a valid seperator this will seperate the array and summerize
	if(numbers.includes(',') || numbers.includes('\n')){
	var numberArray = numbers.split(/[\n , ]/);		
		return sum(numberArray);
	}

	//if string only contain a single number this should return that single number
	return parseInt(numbers);
}

//This function takes in an array of numbers and returns the sum of the values
function sum(array){
		var total = 0;
		for(var i = 0; i < array.length; i++){
			total += parseInt(array[i]);
		}
		return total;
}

module.exports = add;