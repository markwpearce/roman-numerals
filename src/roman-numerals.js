// Roman numerals can be abstracted to be thought of
// as descrete units for each base ten digit.
// For example, for 0-9, we have:
// (nothing), I, II, III, IV, V, VI, VII, VIII, IX
// For the tens place (eg. 0,10,20,30,...,90)
// (nothing), X, XX, XXX, XL, L, LXX, LXXX, XC,
// Etc.
// This code looks at each digit place and maps that to
// what letters are needed for that digit place


var LETTERS = ['v', 'x', 'l', 'c', 'd', 'm'];

var number, //number currently looked at
    magnitude, //how many overruns of the letters array
    currentPos; //index of position in LETTERS array

function reset(num) {
  number = num;
  magnitude = 0;
  //start below 1st in LETTERS
  //because 'I' is only used once
  currentPos = -1;
}


//Returns the letter for the current position
function getNextLetter(dontMovePostion) {
  if(currentPos === -1) {
    currentPos = 0;
    return 'I';
  }

  var out = LETTERS[currentPos].toUpperCase();

  //If we've overun the Letters array,
  //add bars above letter using unicode,
  //one bar for each time we've overrun the array
  for(var i = 0; i<magnitude; i++) {
    out += '\u0305';
  }
  if(!dontMovePostion) {
    //when we get our "tens" digit, we don't
    //want to move our pointer
    currentPos += 1;
  }
  if(currentPos === LETTERS.length) {
    //We've overun LETTERS,
    //so reset the currentPos and increase the magnitude
    currentPos = 0;
    magnitude += 1;
  }

  return out;
}

//Returns a string of letter repeated a number of times
var repeatSequence = function(letter, times) {
  return Array(times+1).join(letter);
};


function getCurrentChunk() {
  var ones = getNextLetter();
  var fives = getNextLetter();
  var tens = getNextLetter(true);

  //get the value of the lowest digit
  var thisPlace = number % 10;

  //shift the number
  number = Math.floor(number / 10);

  //get the "chunk" for this digit
  if(thisPlace === 0){return "";}
  //eg. I, II, III
  if(thisPlace < 4) {return repeatSequence(ones, thisPlace);}
  //eg. IV
  if(thisPlace === 4) {return ones+fives;}
  //eg. V, VI, VII, VIII
  if(thisPlace < 9) {return fives+repeatSequence(ones, thisPlace-5);}

  // thisPlace must be 9
  // eg. IX
  return ones+tens;
}




function toRoman (num) {
  var chunks = [];
  reset(num);
  while(number > 0) {
    chunks.push(getCurrentChunk());
  }
  return chunks.reverse().join('');
}


if (typeof exports !== 'undefined') {
   exports.toRoman = toRoman;
}
