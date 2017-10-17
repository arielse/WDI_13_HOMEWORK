var cityType = document.querySelector('#city-type');
var cities = ['Austin', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney'];
var body = document.querySelector('body');

cities.forEach(function(city) {
  var node = document.createElement('option');
  var textnode = document.createTextNode(city);
  node.appendChild(textnode);
  cityType.appendChild(node);
});
var list = document.querySelectorAll('option');

list[1].addEventListener('click', function() {
  body.classList.add('austin');
  console.log('austin clicked');
});
