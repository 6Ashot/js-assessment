exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise((resolve, reject) => {
  		resolve(value)
  	}) 
  },

  manipulateRemoteData: function(url) {
	return new Promise((resolve, reject) => {
   		fetch(url).then(res => res.json())
			.then((data) => {
  				let names = [];
                data.people.forEach((el) => {
                    names.push(el.name);
                });
            	resolve(names.sort());
			})
		});
  }
};
