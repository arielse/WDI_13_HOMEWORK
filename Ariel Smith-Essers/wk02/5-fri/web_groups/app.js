


// ----------------------
// Presentation Functions
// ----------------------
var listInput = document.querySelector('.list-input');
var groupSizeInput = document.querySelector('.group-size');
var button = document.querySelector('button');
var groupOutput = document.querySelector('.group-output');



// makes an array of strings from the input list
var listArrMaker = function() {
  // gets the number value of group size
  var groupSize = Number(groupSizeInput.value);

  var groupString = listInput.value;
  var groupArr = groupString.split(", ");
  var length = groupArr.length;
  var groupArrShuffle = [];

  for (var i = 0; i < length; i++) {
    arrShuffle = Math.floor(Math.random() * groupArr.length);
    groupArrShuffle.push(groupArr[arrShuffle]);
    groupArr.splice(arrShuffle, 1);
  }

// gets the array and splits it depending on the groupSize entered.
  for (var i = 0; i = groupArrShuffle.length/groupSize; i++) {
    if (groupArrShuffle.length % groupSize === 1) {
      var oddItem = groupArrShuffle.splice((groupArrShuffle.length - 1), 1);
    }
    console.log(groupArrShuffle.splice(0, groupSize));
  };

  listInput.value = "";
  groupSizeInput.value = "";
}




// get a random selection from the groupArr and then put that into separate arrays that are as long as the groupSize input.



button.addEventListener('click', function(){
  listArrMaker();
});
