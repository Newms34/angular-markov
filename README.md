# Angular-Markov
Bower module for Markov chains in Angular!
##Instalation:
Run ```bower install angular-markov```.

Include the dependency in your angular app:
```var app = angular.module('myAwesomeModule',['angular-markov']).controller(function($scope,angularMarkov){})```

Include the script file in your HTML: 
```<script src="./bower_components/angular-markov/angular-markov.js"></script>``` 
(or, ya know, however your directories are structured).

##Usage: 

 1 Run ```angularMarkov.readMarkov()``` and pass it a string or array to generate a markov object.

 2 Run ```angularMarkov.makeMarkov()``` and pass it a markov object to output some awesome markov output!

 3 Pass a second options object to either of the above for more customization.

##Options:

Include the following options (in an object!) to customize your markov awesomeness

###angularMarkov.readMarkov()

 - lower: if set to true, everything is lower case. Default ```false```
 - big: if set to true, angular-markov will still parse very large strings/arrays. Note that this can make your computer very sad! Default ```false```.
 - usePunc: Use punctuation. Default ```false```.

###angularMarkov.makeMarkov()
	
 - format: If set to string, will return a string. Otherwise, will return a non-joined array. Default ```string```
 - seed: Starting word (or item). If this isn't specified, angular-markov will pick one for you.
 - len: Length of the outputted sample. Default ```200```.
