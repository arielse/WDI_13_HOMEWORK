var cityType = document.querySelector('#city-type');
var cities = ['Austin', 'Los Angeles', 'New York City', 'San Francisco', 'Sydney'];


cities.forEach(function(city) {
  var node = document.createElement('option');
  var textnode = document.createTextNode(city);
  node.appendChild(textnode);
  cityType.appendChild(node);

});
