var alamein = ['Flinders Street', 'Richmond', 'East Richmond','Burnley', 'Hawthorn', 'Glenferrie'];

var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooroonga'];

var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var lines = [alamein, glenWaverly, sandringham];

var origin;
var destination;
var intersection = 'Richmond';

origin = 'Tooroonga';
destination = 'Glenferrie';

// alamein.slice(origIndex, destIndex + 1);

if (origin === intersection || destination === intersection) {
 console.log(intersection);
} else {
  // search through arrays for the origin platform
  for (var i = 0; i < lines.length; i++) {
    // if origin is in the array
    if (lines[i].indexOf(origin) !== -1) {
      // put the array in a variable
      var start = lines[i];
      var origIndex = start.indexOf(origin);
      var interIndex = start.indexOf(intersection);
      // if originIndex is larger than interIndex
      if (origIndex > interIndex) {
        // reverse order of array
        start.reverse();
        var origIndex = start.indexOf(origin);
        var interIndex = start.indexOf(intersection);
        var first = start.slice(origIndex, interIndex);

      }else {

      var first = start.slice(origIndex, interIndex + 1);
      }
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // if destination is in the array
    if (lines[i].indexOf(destination) !== -1) {
      // put the array in a variable
      var end = lines[i];
      var destIndex = end.indexOf(destination);
      var interIndex = end.indexOf(intersection);
      // if destinIndex is smaller than interIndex
      if (destIndex < interIndex) {
        // reverse order of array
        end.reverse();
        var destIndex = end.indexOf(destination);
        var interIndex = end.indexOf(intersection);
        var last = end.slice(interIndex, destIndex +1);
      }else {
      var last = end.slice(interIndex, destIndex +1);

      }
    }
  }
  var journey = first.concat(last);
  console.log(journey);
}






// make an if statement that says if origin and destination are in the same array, then do separate thing.
// if origIndex is greater than interIndex or destIndex then reverse array, and after that concat the array.
