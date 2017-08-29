for (var i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  }else {
    console.log(i + " is odd");
  }
}

for (var i = 0; i <= 10; i++) {
  var times = i * 9;
  console.log(i + " * 9 = " + times);
}

var topColors = ['Mustard Yellow', 'Blush Pink', 'Peacock Blue', 'Sea Green', 'Royal Purple'];

for (var i = 0; i < topColors.length; i++) {
  document.write("<p>My #" + (i + 1) + " choice is " + topColors[i]+ "</p>");
}
