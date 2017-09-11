


// ----------------------
// Presentation Functions
// ----------------------
var listInput = document.querySelector('.list-input');
var groupSizeInput = document.querySelector('.group-size');
var button = document.querySelector('button');
var groupOutput = document.querySelector('.group-output');


// var data = {
//   numberOfGroups: 0;
//   groupSize: 0;
//   things: []
// }

// var foo = function() {
//   // fetch the stuff from the DOM
//   data.groupSize = 10;
//
//   bar(groupSize, numberOfGroups, things);
// }



var groupSizeFn = function() {
  return Number(groupSizeInput.value);
}

// makes an array of strings from the input list
var listArrMaker = function() {
  // gets the number value of group size

  var groupString = listInput.value;
  var groupArr = groupString.split(", ");
  return groupArr;
}

var shuffleArray = function(inputArray) {
  var shuffledArray = [];

  var length = inputArray.length;
  var groupArrShuffle = [];

  for (var i = 0; i < length; i++) {
    var arrShuffle = Math.floor(Math.random() * inputArray.length);
    shuffledArray.push(inputArray[arrShuffle]);
    inputArray.splice(arrShuffle, 1);
  }

  return shuffledArray;
}


var showFinishedGroups = function(groupArr){

  var groupArrShuffle = shuffleArray(groupArr);
  // gets the array and splits it depending on the groupSize entered.
  for (var i = 0; i <= groupArrShuffle.length/groupSizeFn(); i++) {
    console.log(groupArrShuffle.splice(0, groupSizeFn()));

  };

  console.log(groupArrShuffle);

  listInput.value = "";
  groupSizeInput.value = "";
}

var output = function() {
  var origArr = listArrMaker();
  showFinishedGroups(origArr);
}




// get a random selection from the groupArr and then put that into separate arrays that are as long as the groupSize input.



button.addEventListener('click', function(){
  output();
});
