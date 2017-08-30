var alamein = ['Flinders Street', 'Richmond', 'East Richmond','Burnley', 'Hawthorn', 'Glenferrie'];

var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooroonga'];

var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var lines = [alamein, glenWaverly, sandringham];

var origin;
var destination;
var intersection = 'Richmond';

origin = 'Richmond';
destination = 'Flinders Street';

alamein.slice(origIndex, destIndex + 1);

for (var i = 0; i < lines.length; i++) {
  if (lines[i].indexOf(origin) !== -1) {
    var start = lines[i];
    var origIndex = start.indexOf(origin);
    var interIndex = start.indexOf(intersection);
  }

  var first = start.slice(origIndex, interIndex + 1);
}
for (var i = 0; i < lines.length; i++) {
  if (lines[i].indexOf(destination) !== -1) {
    var end = lines[i];
    var destIndex = end.indexOf(destination);
    var interIndex = end.indexOf(intersection);
  }
}
var last = end.slice(interIndex + 1, destIndex);
var journey = first.concat(last);

// make an if statement that says if origin and destination are in the same array, then do separate thing.
// if origIndex is greater than interIndex or destIndex then reverse array, and after that concat the array.
