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
  
  if (parseInt(playerLeft) < 20) {
    moveTo(20);
  }
  
  if (parseInt(playerLeft) > 230) {
    moveTo(-20);
  }
})

var ball = wrapper.querySelector('.ball');


animate(function(timePassed) {
    ball.style.top = timePassed / 10 + 'px';
  }, 5000);














  function animate(draw, duration) {
    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // определить, сколько прошло времени с начала анимации
      var timePassed = time - start;
  
      // возможно небольшое превышение времени, в этом случае зафиксировать конец
      if (timePassed > duration) timePassed = duration;
  
      // нарисовать состояние анимации в момент timePassed
      draw(timePassed);
  
      // если время анимации не закончилось - запланировать ещё кадр
      if (timePassed < duration) {
        requestAnimationFrame(animate);
      }
  
    });
  }

function moveTo (n) {
  player.style.left = parseInt(playerLeft) + n + 'px';
  playerLeft = parseInt(playerLeft) + n + 'px';
}