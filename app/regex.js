exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    // console.log(str)
    // console.log((/[0-9]/g).test(str))
    return (/[0-9]/g).test(str);
  },

  containsRepeatingLetter: function(str) {
    // console.log(str)
    // console.log((/(\w)\1+/).test(str))
    return (/([a-zA-Z])\1+/).test(str)
  },

  endsWithVowel: function(str) {
    // console.log(str)
    return (/.*([aeiou]|[AEIOU])$/).test(str)
  },

  captureThreeNumbers: function(str) {
    // console.log(str)
    // console.log((/\d{3}/).exec(str))
    return (/\d{3}/).exec(str) != null ? (/\d{3}/).exec(str)[0] : false
  },

  matchesPattern: function(str) {
    // console.log((/^\d{3}[-][0-9]{3}[-]\d{4}$/g).test(str));
    return (/^\d{3}[-][0-9]{3}[-]\d{4}$/g).test(str);
  },

  isUSD: function(str) {
    // console.log((/^\$[+-]?[0-9]{1,3}(?:,?[0-9]{3})*([.0-9]{0}|[.0-9]{3})$/).test(str))
    return (/^\$[+-]?[0-9]{1,3}(?:,?[0-9]{3})*([.0-9]{0}|[.0-9]{3})$/).test(str)
  }
};
