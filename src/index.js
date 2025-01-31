// Cursor Rocket Animation
const rocket = document.getElementById("rocket");

document.addEventListener("mousemove", (e) => {
    rocket.style.left = `${e.pageX - 25}px`;
    rocket.style.top = `${e.pageY - 25}px`;
});

// Pong Game
const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

// Create the Pong paddle and ball objects
const paddleWidth = 10, paddleHeight = 100;
const ballSize = 10;

let paddle1Y = canvas.height / 2 - paddleHeight / 2, paddle2Y = canvas.height / 2 - paddleHeight / 2;
let paddle1Speed = 0, paddle2Speed = 0;
let ballX = canvas.width / 2, ballY = canvas.height / 2;
let ballSpeedX = 5, ballSpeedY = 5;

// Draw the paddles and ball
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    context.fillStyle = "#4caf50";
    context.fillRect(10, paddle1Y, paddleWidth, paddleHeight);
    context.fillRect(canvas.width - 20, paddle2Y, paddleWidth, paddleHeight);

    // Draw ball
    context.fillStyle = "#4caf50";
    context.fillRect(ballX, ballY, ballSize, ballSize);
}

// Move the paddles and ball
function move() {
    paddle1Y += paddle1Speed;
    paddle2Y += paddle2Speed;

    // Ball movement
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Ball bounce
    if (ballY <= 0 || ballY >= canvas.height - ballSize) {
        ballSpeedY = -ballSpeedY;
    }

    // Ball and paddle collision detection
    if (ballX <= 20 && ballY >= paddle1Y && ballY <= paddle1Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }
    if (ballX >= canvas.width - 30 && ballY >= paddle2Y && ballY <= paddle2Y + paddleHeight) {
        ballSpeedX = -ballSpeedX;
    }

    // Ball reset if out of bounds
    if (ballX <= 0 || ballX >= canvas.width - ballSize) {
        ballX = canvas.width / 2;
        ballY = canvas.height / 2;
        ballSpeedX = -ballSpeedX;
    }
}

// Control paddles with keyboard
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        paddle2Speed = -10;
    } else if (e.key === "ArrowDown") {
        paddle2Speed = 10;
    }
    if (e.key === "w") {
        paddle1Speed = -10;
    } else if (e.key === "s") {
        paddle1Speed = 10;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        paddle2Speed = 0;
    }
    if (e.key === "w" || e.key === "s") {
        paddle1Speed = 0;
    }
});

// Game loop
function gameLoop() {
    draw();
    move();
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
