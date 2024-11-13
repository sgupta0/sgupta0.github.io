
let posX = 100, posY = 100;
let speedX = 3, speedY = 2;

const textElement = document.getElementById('bouncing-text');
const ovalElement = document.getElementById('bouncing-oval');


textElement.textContent = 'TWOLIES&ALIE'; 
textElement.style.color = 'white';
ovalElement.style.backgroundColor = 'white';

const sidePadding = 10;
const cornerPadding = 80;
const ovalHeight = ovalElement.offsetHeight;

textElement.style.position = 'absolute';


function updateOvalWidth() {
    const textWidth = textElement.offsetWidth;
    const padding = 30;
    const ovalWidth = textWidth + padding * 2;
    ovalElement.style.width = `${ovalWidth}px`;
    return ovalWidth;
}


function updateTextPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ovalWidth = updateOvalWidth();

    posX += speedX;
    posY += speedY;

    // collision 
    if (posX + ovalWidth / 2 >= width - sidePadding || posX - ovalWidth / 2 <= sidePadding) {
        speedX = -speedX;
    }

    //collision
    if (posY + ovalHeight / 2 >= height - sidePadding || posY - ovalHeight / 2 <= sidePadding) {
        speedY = -speedY;
    }

    // Update position of text 
    textElement.style.left = `${posX - textElement.offsetWidth / 2}px`;
    textElement.style.top = `${posY - textElement.offsetHeight / 2}px`;

    ovalElement.style.left = `${posX - ovalWidth / 2}px`;
    ovalElement.style.top = `${posY - ovalHeight / 2}px`;

    requestAnimationFrame(updateTextPosition);
}

// Start animation loop
updateTextPosition();

// Cursor 
const cursor = document.getElementById('custom-cursor');
let angle = 0;


document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
    angle += 5; 
    cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
});
