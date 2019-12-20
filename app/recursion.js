exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function list(data, dirName) {
    var arr = [];
    data.files.forEach((i) => {
      if(dirName === undefined){
            if(typeof i === 'string') arr.push(i);
            if(typeof i === 'object') arr = arr.concat(list(i))
      }else if (i.dir === dirName){
            if(typeof i === 'string') arr.push(i);
            if(typeof i === 'object') arr = arr.concat(list(i))
      }
    })
    // console.log(arr)
    return arr;
  },

  permute: function(arr) {
    
  },

  fibonacci: function(n) {
  	if(n === 0 || n ===1) return 1;
  	return fibonacci(n-1) + fibonacci(n-2);
  },

  validParentheses: function(n) {
    
  }
};
function fibonacci(n) {
  	if(n == 0) return 0;
  	if(n == 1) return 1;
  	return fibonacci(n-1) + fibonacci(n-2);
}