var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var ballColor = 'rgb(255, 255, 0)';
var ballPosX = canvas.width / 2;
var ballPosY = canvas.height / 2;
var ballRadius = 60;

var ballSpeedX = 4;
var ballSpeedY = 2;


context.beginPath();
context.arc(ballPosX, ballPosY, ballRadius, 0, 2 * Math.PI);
context.fill();

var animate = function () {
  context.clearRect(0, 0, canvas.width, canvas.height);


  context.fillStyle = ballColor;
  context.beginPath();
  context.arc(ballPosX, ballPosY, ballRadius, 0, 2 * Math.PI);
  context.fill();

  if ((ballPosX + ballRadius >= canvas.width) || (ballPosX - ballRadius) <= 0) {
    ballSpeedX = ballSpeedX * -1;
  }

  if ((ballPosY + ballRadius >= canvas.height) || (ballPosY - ballRadius <= 0)) {
    ballSpeedY = ballSpeedY * -1;
  }

  ballPosX = ballPosX + ballSpeedX;
  ballPosY = ballPosY + ballSpeedY;


  window.requestAnimationFrame(animate);

}


animate();

//  CHANGE BALL SPEED ON SIZE BUTTON CLICK
canvas.addEventListener("click", function (event) {
  var distX = Math.abs(ballPosX - event.offsetX);
  var distY = Math.abs(ballPosY - event.offsetY);

  if (distX < ballRadius && distY < ballRadius) {
    ballSpeedX = (Math.floor(Math.random() * 8));
  }

  if (distX < ballRadius && distY < ballRadius) {
    ballColor = colors[Math.floor(Math.random() * colors.length)];
  }
})


//CHANGE BALL COLOR ON BUTTON CLICK
colorButton.addEventListener("click", function (event) {
  var colors = ['#D9FFEC', '#FF99A5', '#CC99B8'];
  ballColor = colors[Math.floor(Math.random() * colors.length)];
});

document.getElementById("colorButton").onclick = function () {
  document.getElementById("output").style.colors;
}


// CHANGE BALL SIZE TO INCREASE DIFFICULTY OF GAME ON BUTTON CLICK
sizeButton.addEventListener("click", function changesize(event) {
  if (ballRadius <= 10) {
    ballRadius = 60
  } else {
    ballRadius -= 10;
  }


});

//  SCORE COUNT
var button = document.getElementById("score"),
  count = 0;
canvas.onclick = function () {
  var distX = Math.abs(ballPosX - event.offsetX);
  var distY = Math.abs(ballPosY - event.offsetY);
  if (distX < ballRadius && distY < ballRadius) {
    count += 1;
    button.innerHTML = +count;
  }
};



