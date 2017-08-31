// function one
var stringArr = ['hey', 'yeah', 'no', 'what about yes'];
var elementLength = [];

var lengths = function(stringArr) {
elementLength.push(stringArr.length);
}
// stringArr.forEach(lengths);

// function two
var num = [1, 2, 3, 4];
var doubleIt = function(num) {
  console.log(num * 2);
}
// num.forEach(doubleIt);

//// make own for each
// var myForEach = function(arr, fn) {
//   for (var i = 0; i < arr.length; i++) {
//     fn(arr[i]);
//   }
// }
//
// myForEach(stringArr, lengths);
