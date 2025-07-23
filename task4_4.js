//task4_4.js
// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor(); // Change background color to a random color
}

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add click event listener to the button
document.getElementById("changeColorButton").addEventListener("click", changeBackgroundColor);