exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (str2) => {
       return str + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
    var result = [];
    arr.forEach((i) => {
      result.push(() => {
        return fn(i)
      })
    })
    return result;
  },

  partial: function(fn, str1, str2) {
    return (str3) => {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    const args = [...arguments]
    return args.reduce((total, i) => {
      return total += i;
    }, 0)

  },

  callIt: function(fn) {
    fn(...[...arguments].slice(1))
  },

  partialUsingArguments: function(fn) {
    const arr1 = [...arguments].slice(1);
    return function (){
      const arr2 = [...arguments]
      const arr = arr1.concat(arr2)
      return fn(...arr)
    }
  },

  curryIt: function(fn) {

  }
};
