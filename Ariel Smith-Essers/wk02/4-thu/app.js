
var walkTimer = null;
var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');
var catWidth = 296;
var forwards = true;

var catWalk = function () {
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);
  if (currentLeftOffset < window.innerWidth - catWidth){
    img.style.left = currentLeftOffset + 20 + "px";
  } else {
    return forwards = false;
  }
};
var turnCatWalk = function() {
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);
  if (currentLeftOffset >= window.innerWidth - catWidth) {
    img.style.left = currentLeftOffset - 20 + "px";
  } else {
    return forwards = true;
  }
};

var fullCatWalk = function() {
  while (forwards === true) {
    catWalk();
  }
  while (forwards === false) {
    turnCatWalk();
  }
}

var startCatWalk = function() {
  walkTimer = setInterval(fullCatWalk, 100);
  document.querySelector('#start-button').disabled = true;
};

var stopCatWalk = function() {
  clearInterval(walkTimer);
  document.querySelector('#start-button').disabled = false;
};



stopButton.addEventListener('click', stopCatWalk);
startButton.addEventListener('click', startCatWalk);
