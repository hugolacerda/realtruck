//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"


const phoneNumber = (pNum) => {
	
	pNum = pNum.replace(/[\s.()-]/g, '');

	var RE_SSN = /[a-zA-Z@]/;
	
	if(pNum.length >= 11 && !pNum.startsWith("1") || pNum.length <= 9 || RE_SSN.test(pNum) ){
		pNum = null;
	}
	
	
	return pNum;
	
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
