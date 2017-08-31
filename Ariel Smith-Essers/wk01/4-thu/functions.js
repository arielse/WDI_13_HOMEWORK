var c = 23;
var f;
// f = c * (9/5) + 32;

var tempConvert = function(celcius) {
  var f = celcius * (9 / 5) + 32;
  console.log(f);
};

var howOld = function(birthYear, currentYear) {
  var age = currentYear - birthYear;
  var ageBeforeBday = age - 1;
  console.log("You are either " + ageBeforeBday + " or " + age);
};
// howOld(1989, 2017);

var calculateSupply = function(age, amountPerDay) {
  var maxAge = 85;
  var yourSupply = (maxAge - age) * amountPerDay * 365;
  console.log("You will need " + yourSupply + " to last you until the ripe old age of " + maxAge);
}
// calculateSupply(28, 5);

var calcCircumference = function(radius) {
  var circumference = 2 * Math.PI * radius;
  return circumference.toFixed(2);
}
// console.log("The circumference is " + calcCircumference(3.25));

var calcArea = function(radius) {
  var area = Math.PI * radius * radius;
  return area.toFixed(2);
}
// console.log("The area is " + calcArea(3));
