
var walkTimer = null;
var stopButton = document.querySelector('#stop-button');
var startButton = document.querySelector('#start-button');
var catWidth = 296;
var forwards = "right";

var catWalk = function () {
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);
  if (currentLeftOffset < window.innerWidth - catWidth){
    forwards = "right";
    img.style.left = currentLeftOffset + 20 + "px";
  } else {
    forwards = "left";
  }
};
var turnCatWalk = function() {
  var img = document.querySelector('img');
  var currentLeftOffset = parseInt(img.style.left);
  if (currentLeftOffset >= window.innerWidth - catWidth) {
    forwards = "left";
    img.style.left = currentLeftOffset - 20 + "px";
  } else {
    forwards = "right";
  }
};

var fullCatWalk = function() {
  while (forwards === "right") {
    catWalk();
  }
  while (forwards === "left") {
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
