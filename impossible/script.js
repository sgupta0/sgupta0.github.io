// script.js

// The array of text options
const texts = ["THE SUN WILL RISE FROM THE WEST", "ROLL A SEVEN", "DAYLIGHT SAVING IS FUN", "DRAW A SQUARE CIRCLE", "DC ELEVATOR WORKS", "HEADS & TAILS", "BLUE RED VELVET CAKE"];

// The array of color options (you can modify this to add more colors)
const colors = ["#ff00ff", "#00ffff", "ffff00", "#ff0000", "#00ff00", "#ff6800", "#0000ff", "#8f00ff"];

// Initial position and speed
let posX = 100;
let posY = 100;
let speedX = 3;
let speedY = 2;
const textElement = document.getElementById('bouncing-text');
const ovalElement = document.getElementById('bouncing-oval');


// Set an initial text
let currentTextIndex = 0;
let currentColorIndex = 0;
textElement.textContent = texts[currentTextIndex];
textElement.style.color = colors[currentColorIndex]; // Set the initial color
ovalElement.style.backgroundColor = colors[currentColorIndex]; 

// Safe padding to prevent text from hitting corners
const sidePadding = 10; // Minimum distance from the sides (left, right, top, bottom)
const cornerPadding = 80; // Additional padding from the corners to avoid collision with the corners

const ovalHeight = ovalElement.offsetHeight;

// Set the initial position of the text
textElement.style.position = 'absolute';

function updateOvalWidth() {
    const textWidth = textElement.offsetWidth; // Get the current text width
    const padding = 30; // Additional space around the text in the oval (for padding)
    const ovalWidth = textWidth + padding * 2; // Set the oval width based on text width + padding

    // Update the oval width
    ovalElement.style.width = `${ovalWidth}px`;
      return ovalWidth;
}

// Update the position of the text
function updateTextPosition() {
    // Get the current width and height of the viewport
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Get the bounding box of the text element (position and size)
    // const rect = textElement.getBoundingClientRect();
    
    //    updateOvalWidth();

      const ovalWidth = updateOvalWidth();

    // Move the text by speed
    posX += speedX;
    posY += speedY;

    // Check for collision with the left or right edge (but avoid corners)
    // if (posX + rect.width >= width - sidePadding || posX <= sidePadding) {
    //     speedX = -speedX; // Reverse the horizontal direction

    //     changeText(); // Change the text and color when it hits a side edge
    // }

    // // Check for collision with the top or bottom edge (but avoid corners)
    // if (posY + rect.height >= height - sidePadding || posY <= sidePadding) {
    //     speedY = -speedY; // Reverse the vertical direction
    //     changeText(); // Change the text and color when it hits a top/bottom edge
    // }

    //  if (posX + ovalElement.offsetWidth / 2 >= width - sidePadding || posX - ovalElement.offsetWidth / 2 <= sidePadding) {
    //     speedX = -speedX;
    //     changeText();
    // }

    // // Check for vertical collision (top or bottom) with oval size
    // if (posY + ovalHeight / 2 >= height - sidePadding || posY - ovalHeight / 2 <= sidePadding) {
    //     speedY = -speedY;
    //     changeText();
    // }



    if (posX + ovalWidth / 2 >= width - sidePadding || posX - ovalWidth / 2 <= sidePadding) {
        speedX = -speedX;
        changeText();
    }

    // Check for vertical collision (top or bottom) with oval size
    if (posY + ovalHeight / 2 >= height - sidePadding || posY - ovalHeight / 2 <= sidePadding) {
        speedY = -speedY;
        changeText();
    }

    // Update the position of the text element

     textElement.style.left = `${posX - textElement.offsetWidth / 2}px`; // Center the text horizontally
    textElement.style.top = `${posY - textElement.offsetHeight / 2}px`;

    // textElement.style.left = posX + 'px';
    // textElement.style.top = posY + 'px';

// ovalElement.style.left = posX - (ovalElement.offsetWidth - rect.width) / 2 + 'px';
// ovalElement.style.top = posY - (ovalElement.offsetHeight - rect.height) / 2 + 'px';

    //  ovalElement.style.left = posX - ovalElement.offsetWidth / 2 + 'px'; // Center the oval with text
    // ovalElement.style.top = posY - ovalHeight / 2 + 'px'; // Center the oval with text

 ovalElement.style.left = `${posX - ovalWidth / 2}px`; // Center the oval with text
    ovalElement.style.top = `${posY - ovalHeight / 2}px`;

    // Request a new animation frame to update the position
    requestAnimationFrame(updateTextPosition);
}

// Function to change the text and color when hitting an edge
function changeText() {
    // Cycle through the texts array
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    textElement.textContent = texts[currentTextIndex];

    // Cycle through the colors array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    textElement.style.color = colors[currentColorIndex];
    ovalElement.style.backgroundColor = colors[currentColorIndex];
}

// Start the animation loop
updateTextPosition();


const cursor = document.getElementById('custom-cursor');

let angle = 0;  // Initial angle for rotation

// Update cursor position and apply rotation
document.addEventListener('mousemove', (e) => {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Set the position of the cursor element to follow the mouse
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Continuously rotate the cursor element
    angle += 5; // Adjust this to make the rotation speed faster or slower
    cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply rotation
});

