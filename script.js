var walkingMan = document.getElementById('walkingMan');

// body.addEventListener('click', function() {
//   var currentPosition = 10;
//
//     walkingMan.style.marginLeft = currentPosition + 'px';
//
//   currentPosition += 10;
// });

var manPos = 0;
var advance = 1;

var setManPos = function(){
  if(manPos >= 1100){
    advance = -1;
    walkingMan.style.transform = 'rotateY(180deg)';
  }
  if(manPos <= 0){
    advance = 1;
    walkingMan.style.transform = '';
  }
  manPos += advance;
  walkingMan.style.marginLeft = manPos + 'px';
};

var intervalId = window.setInterval(setManPos, 5)
