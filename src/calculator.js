function add(numbers){

	//if no value is sent to function it will return a zero as default
	if(numbers == ""){
		return 0;
	}

	var delimiters = /[\n ,]/; //default delimiters

	// This functions adds a custom delimiter to the regular expression if asked to
	if(numbers.startsWith('//')){
		var newDelimiter = numbers[2];
		numbers = numbers.substring(3);
		delimiters = new RegExp("[\\n " + ", " + newDelimiter.toString() + "]");
	}

	//if the string contains a valid seperator this will seperate the array and summerize
	if(numbers.match(delimiters)){
	var numberArray = numbers.split(delimiters);		
		return sum(numberArray);
	}

	//if string only contain a single number this should return that single number
	return parseInt(numbers);
}

//This function takes in an array of numbers and returns the sum of the values
function sum(array){

	///this function should validate that no value is below zero and otherwise throw an exception
	validateNegatives(array);

	var total = 0;
	for(var i = 0; i < array.length; i++){
		if(array[i] <= 1000){				// This if-sentence makes sure to ignore values higher than 1000
			total += parseInt(array[i]);
		}
	}
	return total;
}

function validateNegatives(array){
	if(array.some(negativeNumbersCheck)){
		var bannedNumbers = [];
		for(var i = 0; i < array.length; i++){
			if(array[i] < 0){
				bannedNumbers.push(array[i]);
			}
		}
		throw "Negatives not allowed: " + bannedNumbers;
	}
}
//this is a helper function for the negative numbers check
function negativeNumbersCheck(containsNegatives){
	return containsNegatives < 0;
}

module.exports = add;