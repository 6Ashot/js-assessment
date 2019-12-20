exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	num = (num >>> 0).toString(2);
  	if(num.length < 8){
  		for(let i = num.length; i < 8; i++){
  			num = '0' + num;
  		}	
  	}
  	return num
  },

  multiply: function(a, b) {
    var commonMultiplier = 1000000;
    a *= commonMultiplier;
    b *= commonMultiplier;
    return (a * b) / (commonMultiplier * commonMultiplier);
  }
};
