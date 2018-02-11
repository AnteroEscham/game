var wrapper = document.querySelector('.wrapper');
var player = document.querySelector('.player');


var computedStyle = getComputedStyle(player);
var playerLeft = computedStyle.left;


document.addEventListener('keydown', function(e) {
  var keyLog = e.key;
  if (keyLog === 'ArrowLeft') {
    moveTo(-20);
  }
  
  if (keyLog === 'ArrowRight') {
    moveTo(20);
  }
  
  if (parseInt(playerLeft) < 30) {
    moveTo(20);
  }
  
  if (parseInt(playerLeft) > 270) {
    moveTo(-20);
  }
})

function moveTo (n) {
  player.style.left = parseInt(playerLeft) + n + 'px';
  playerLeft = parseInt(playerLeft) + n + 'px';
}