angular.module('angular-markov', []).
service('angularMarkov', function() {
    this.readMarkov = function(inp, opts) {
        var markItems = []; //list of markov items to be analyzed
        opts = opts || {};
        if (!inp) {
            return 'Error! No contents specified!'
        } else if (typeof inp == 'string' && opts.usePunc) {
            markItems = inp.split(' ');
        } else if (typeof inp == 'string' && !opts.usePunc) {
            markItems = inp.split(/[\W]/g);
        } else if (inp instanceof Array) {
            markItems = inp;
        } else {
            return 'Error! I\'m not sure what kinda input this is! Please only use arrays or strings.';
        }
        if (!opts.big && markItems.length > 3500) {
            return markItems.length + ' is too many items! Please include the \'big\' option if you want to proceed anyway!'
        }
        //now we can form the markov chain!
        var markObjs = {}; //the markov objects with their list of followers.
        var finalMark = {}; // the final mark chain to return.
        for (var i = 0; i < markItems.length - 1; i++) {
            var wrdToCheck = opts.lower ? markItems[i].toLowerCase() : markItems[i];
            var followWrd = opts.lower ? markItems[i + 1].toLowerCase() : markItems[i + 1];
            if (wrdToCheck != '' && followWrd != '') {
                if (!markObjs[wrdToCheck]) {
                    //this word is not already in our list, so put it in.
                    markObjs[wrdToCheck] = {};
                }
                if (!markObjs[wrdToCheck][followWrd]) {
                    markObjs[wrdToCheck][followWrd] = 1;
                } else {
                    markObjs[wrdToCheck][followWrd]++;
                }
            }
        }
        //markObjs done. now make the final mark
        var allWrds = Object.keys(markObjs)
        for (var j = 0; j < allWrds.length; j++) {
            var nextWrds = Object.keys(markObjs[allWrds[j]]); //our list of following words
            finalMark[allWrds[j]] = [];
            for (var k = 0; k < nextWrds.length; k++) {
                for (var l = 0; l < markObjs[allWrds[j]][nextWrds[k]]; l++) {
                    finalMark[allWrds[j]].push(nextWrds[k]);
                }
            }
        }
        return finalMark;
    }
    this.makeMarkov = function(mark, opts) {
        opts = opts || {};
        len = parseInt(opts.len) || 200;
        format = opts.format || 'string';
        var allWrds = Object.keys(mark);
        var seed = opts.seed || allWrds[Math.floor(Math.random() * allWrds.length)];
        console.log('Your seed is:', seed)
        var out = [];
        for (var i = 0; i < len; i++) {
            out.push(seed);
            var nextWrds = mark[seed];
            if (nextWrds) {
                seed = nextWrds[Math.floor(Math.random() * nextWrds.length)]
            }
            else{
            	//in case we used an end word, in which case there ISN'T a following word
            	seed = allWrds[Math.floor(Math.random() * allWrds.length)]
            }
        }
        return format=='string'? out.join(' '): out;
    }
})
