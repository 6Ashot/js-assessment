exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
  	return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	let result = [];
  	for (var prop in obj) {
    	if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        	result.push(prop+': '+obj[prop]);
    	}
	}
	return result;
  }
};
