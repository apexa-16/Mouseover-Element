const container = document.querySelector('.ball-container');

function createBall() {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.style.backgroundColor = getRandomColor();
    ball.style.width = `${getRandomSize()}px`;
    ball.style.height = ball.style.width;
    ball.style.left = `${getRandomPosition()}px`;
    ball.style.top = `${getRandomPosition()}px`;

    // Add a mouseover event listener to make the ball bigger
    ball.addEventListener('mouseover', () => {
        ball.style.transform = 'scale(1.2)';
    });

    // Add a mouseout event listener to return the ball to its original size
    ball.addEventListener('mouseout', () => {
        ball.style.transform = 'scale(1)';
    });

    container.appendChild(ball);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomSize() {
    return Math.floor(Math.random() * 50) + 50; // Adjust the range as needed
}

function getRandomPosition() {
    return Math.floor(Math.random() * 3000); // Adjust the range as needed
}

// Create a random number of balls
const numberOfBalls = Math.floor(Math.random() * 1000) + 5; // Adjust the range as needed
for (let i = 0; i < numberOfBalls; i++) {
    createBall();
}
