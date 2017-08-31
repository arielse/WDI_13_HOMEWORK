var alamein = ['Flinders Street', 'Richmond', 'East Richmond','Burnley', 'Hawthorn', 'Glenferrie'];

var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooroonga'];

var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var lines = [alamein, glenWaverly, sandringham];

var intersection = 'Richmond';

var origin = 'Glenferrie';
var destination = 'Flinders Street';

if (origin === intersection || destination === intersection) {
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].indexOf(origin) !== -1 && lines[i].indexOf(destination) !== -1) {
      var oneLineTrip = lines[i];
      var origIndex = oneLineTrip.indexOf(origin);
      var destIndex = oneLineTrip.indexOf(destination);
      if (origIndex > destIndex) {
        oneLineTrip.reverse();
        var origIndex = oneLineTrip.indexOf(origin);
        var destIndex = oneLineTrip.indexOf(destination);
        var fullTrip = oneLineTrip.slice(origIndex, destIndex +1);
      }
      var fullTrip = oneLineTrip.slice(origIndex, destIndex +1);
      console.log("Origin: " + origin);
      console.log("Destination: " + destination);
      console.log(fullTrip.join(" ---> "));
      console.log((fullTrip.length - 1) + " stops total.");
    }
  }
} else {
  // search through arrays for the origin platform
  for (var i = 0; i < lines.length; i++) {
    // if origin is in the array
    if (lines[i].indexOf(origin) !== -1) {
      // put the array in a variable
      var startOfTrip = lines[i];
      var origIndex = startOfTrip.indexOf(origin);
      var interIndex = startOfTrip.indexOf(intersection);
      // if originIndex is larger than interIndex
      if (origIndex > interIndex) {
        // reverse order of array
        startOfTrip.reverse();
        var origIndex = startOfTrip.indexOf(origin);
        var interIndex = startOfTrip.indexOf(intersection);
        var firstHalfTrip = startOfTrip.slice(origIndex, interIndex);

      }else {

      var firstHalfTrip = startOfTrip.slice(origIndex, interIndex + 1);
      }
    }
  }

  for (var i = 0; i < lines.length; i++) {
    // if destination is in the array
    if (lines[i].indexOf(destination) !== -1) {
      // put the array in a variable
      var endOfTrip = lines[i];
      var destIndex = endOfTrip.indexOf(destination);
      var interIndex = endOfTrip.indexOf(intersection);
      // if destinIndex is smaller than interIndex
      if (destIndex < interIndex) {
        // reverse order of array
        endOfTrip.reverse();
        var destIndex = endOfTrip.indexOf(destination);
        var interIndex = endOfTrip.indexOf(intersection);
        var lastHalfTrip = endOfTrip.slice(interIndex, destIndex +1);
      }else {
      var lastHalfTrip = endOfTrip.slice(interIndex, destIndex +1);

      }
    }
  }
  var fullTrip = firstHalfTrip.concat(lastHalfTrip);
  console.log("Origin: " + origin);
  console.log("Destination: " + destination);
  console.log(fullTrip.join(" ---> "));
  console.log((fullTrip.length - 1) + " stops total.");
}
