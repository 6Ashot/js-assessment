exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
   let result = '', c = '', counter = 0;
   str.split('').forEach((i) => {
   	// console.log(i);
   	if(c !== i) counter = 0;
   	counter++;
   	c = i;
   	if(counter <= amount) result += i;
   	// console.log(result)
   })
   return result;
  },

  wordWrap: function(str, cols) {
  	// console.log(str, cols)
    var result = '' + str.split(' ')[0];
    str.split(' ').slice(1).forEach((i) => {
      if((result.length + i.length) > cols) {
        result += '\n' + i;
      }else {
        result += ' ' + i
      }
    })
    // console.log(result)
  	return result
  },

  reverseString: function(str) {
  	// console.log()
  	return str.split('').reverse().join('');
  }
};
