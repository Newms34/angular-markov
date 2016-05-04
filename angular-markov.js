angular.module('angular-markov', []).
  service('angularMarkov',function(){
  	this.readMarkov = function(inp){
  		var markItems = [];//list of markov items to be analyzed
  		if (!inp){
  			return 'Error! No contents specified!'
  		}else if(typeof inp = 'String'){
  			markItems = inp.split(/[\W]/g);
  		}else if (inp instanceOf 'Array'){
  			markItems = inp;
  		}else{
  			return 'Error! I\'m not sure what kinda input this is!';
  		}
  		return 'Here is where i would make a markov chain'
  	}
  	this.makeMarkov = function(){
  		return 'And here is where i would render the output'
  	}
  })