/* game_index js*/

var canvas,ctx;
var x, y;
var dx, dy;
var ballRadius;

function init(){
  canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');
  
  x = 0;
  y = canvas.height-30;
  
  dx = 2;
  dy = -2;
  
  ballRadius = 15; //반지름
  
  setInterval(draw, 10);
}

function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  /* arc(x, y, radius, startAngle, endAngle, antiClockwise)
     좌표를 중심으로 반지름 크기의 시작점부터 끝나는 점까지 잇는 곡선을 그림 */
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();  
}

function draw(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall();
  
  if(y + dy < 0) dy = -dy; /* 볼의 y위치에 값이 0보다 작은 경우 반전*/
  if(y + dy > canvas.height) dy = -dy; /* canvas.height 높이보다 크면 반전 */
  
  x += dx;
  y += dy;
}