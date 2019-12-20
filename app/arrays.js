exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum = 0;
        return arr.reduce((total, i) => {
          return total += i;
        }, 0);
  },

  remove: function(arr, item) {
    return arr.filter((e) => { return e !== item });
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
  
      let count = 0
      
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count ++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    let duplicates = [];
    // console.log(arr);
    for(let i = 0; i < arr.length; i++){
      let count = 0;
      for(let j = 0; j < arr.length; j++){
        if(i != j && arr[i] === arr[j] && duplicates.indexOf(arr[j]) == -1){
          duplicates.push(arr[j]);
        }
      }
    }
    // console.log(duplicates);
    return duplicates;
  },

  square: function(arr) {
    return arr.map((i) => {
      return i*i;
    })
  },

  findAllOccurrences: function(arr, target) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === target){
        result.push(i)
      }
    }
    return result;
  }
};
