// Bouncing Text and Oval Logic
let posX = 100, posY = 100;
let speedX = 3, speedY = 2;

const textElement = document.getElementById('bouncing-text');
const ovalElement = document.getElementById('bouncing-oval');

// Fixed text and color
textElement.textContent = 'TWOLIES&ALIE'; // Set the text to "TWO TRUTHS & A LIE"
textElement.style.color = 'white';
ovalElement.style.backgroundColor = 'white';

const sidePadding = 10;
const cornerPadding = 80;
const ovalHeight = ovalElement.offsetHeight;

textElement.style.position = 'absolute';

// Update the oval width based on the text width
function updateOvalWidth() {
    const textWidth = textElement.offsetWidth;
    const padding = 30; // Padding around the text
    const ovalWidth = textWidth + padding * 2;
    ovalElement.style.width = `${ovalWidth}px`;
    return ovalWidth;
}

// Update the position of the text and oval
function updateTextPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ovalWidth = updateOvalWidth();

    posX += speedX;
    posY += speedY;

    // Check for collision with the sides
    if (posX + ovalWidth / 2 >= width - sidePadding || posX - ovalWidth / 2 <= sidePadding) {
        speedX = -speedX;
    }

    // Check for collision with the top or bottom
    if (posY + ovalHeight / 2 >= height - sidePadding || posY - ovalHeight / 2 <= sidePadding) {
        speedY = -speedY;
    }

    // Update the position of the text element
    textElement.style.left = `${posX - textElement.offsetWidth / 2}px`;
    textElement.style.top = `${posY - textElement.offsetHeight / 2}px`;

    ovalElement.style.left = `${posX - ovalWidth / 2}px`;
    ovalElement.style.top = `${posY - ovalHeight / 2}px`;

    requestAnimationFrame(updateTextPosition);
}

// Start the animation loop
updateTextPosition();

// Custom Cursor Logic
const cursor = document.getElementById('custom-cursor');
let angle = 0;

// Rotate the cursor when the mouse moves (continuous rotation even if mouse is still)
document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    angle += 5; // Increase for faster rotation
    cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});
