var listInput = document.querySelector('.list-input');
var groupSize = document.querySelector('.group-size');
var button = document.querySelector('button');
var groupOutput = document.querySelector('.group-output');



// makes an array of strings from the input list
var listArrMaker = function() {
  // gets the number value of group size
  var groupSizeFetch = Number(groupSize.value);

  var groupString = listInput.value;
  var groupArr = groupString.split(", ");

// gets the array and splits it depending on the groupSize entered.
  for (var i = 0; i = groupArr.length/groupSizeFetch; i++) {
    console.log(groupArr.splice(0, groupSizeFetch));
  };

  listInput.value = "";
  groupSize.value = "";
}




// get a random selection from the groupArr and then put that into separate arrays that are as long as the groupSize input.



button.addEventListener('click', function(){
  listArrMaker();
});
